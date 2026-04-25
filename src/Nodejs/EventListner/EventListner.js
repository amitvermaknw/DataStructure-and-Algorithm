import { EventListner } from 'event'

class DeploymentService extends EventListner {
    async triggerDeployment(appName) {
        this.emit('deploy:started', { appName, timestamp: new Date() })

        try {
            await this.callArgoCDAPI(appName)
            this.emit('deploy:sucess', { appname })
        } catch (err) {
            this.emit('deploy:failed', { appName, err })
        }
    }
}

const service = DeploymentService()

service.on('deploy:started', (data) => {
    console.log("deployment started")
    kafkaProducer.publish({ event: 'DEPLOYMENT_STARTED', ...data })
})

service.on('deploy:success', (data) => {
    console.log("deployment success")
})

service.on('deploy:failed', (data) => {
    kafkaProducer
})

// Bad — adds new listener every request
app.get('/deploy', (req, res) => {
    service.on('deploy:success', handler); // leaks!
});

//To avoid the memory leak user once()
service.once('deploy:success', handler)

//or remove after use
service.on('deploy:success', handler)
//after
service.off('deploy:success', handler)


//Set MaxListner
service.setMaxListener(25) // default max is 10