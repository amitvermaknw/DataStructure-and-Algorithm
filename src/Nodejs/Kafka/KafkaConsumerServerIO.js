const { Kafka } = require("kafkajs")
const { createServer } = require('http')
const express = require('express')
const { Server } = require('socket.io')
const redis = require('redis')

const app = express()
const httpServer = createServer(app)


//Socket.io server
const io = Server(httpServer, {
    cors: { origin: 'http://localhost:3000' }
})

//Redis clint 
const redisClient = redis.createClient({ url: 'redis://redis-server' })
await redisClient.connect()


io.on('connection', (socket) => {
    console.log('UI client connected', socket.id)

    socket.on('subscribe', async (deploymentId) => {
        socket.join(deploymentId) //Join the room for this deployment

        //Send current state from redis immidiatly on subscibe
        const snapshot = await redisClient.hGetAll(`deployment: ${deploymentId}`)
        if (snapshot) {
            socket.emit('snapshot', { deploymentId, state: snapshot })
        }
    })

    socket.on('disconnect', () => {
        console.log("disconnected")
    })
})

/*******Kafka Consumer********/
const kafka = new Kafka({ brokers: ['kafka-broker:9092'] })
const consumer = kafka.consumer({ groupId: 'deploy-status-group' })

async function startConsumer() {
    await consumer.connect()
    await consumer.subscribe({ topic: 'ansible-deployment-events' })

    await consumer.run({
        eachMessage: async ({ deploymentId, vmName, status, log }) => {

            //Create the worker thread
            parseLogAsync(log).then(async (parsed) => {
                //Write to Rdis
                await redisClient.hSet(
                    `deployment: ${deploymentId}`,
                    vmName
                );

                io.to(deploymentId).emit('deployment-update', {
                    deploymentId,
                    vmName,
                    status,
                    log
                })
            }).catch(err => console.log(err))
        }
    })
}

startConsumer()
httpServer.listen(4000, () => console.log('Server running on port 4000'))