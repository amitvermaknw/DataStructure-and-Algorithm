import { spawn } from 'node:child_process'

//const client = spawn('node', ['-e', streamingData]);  // incase of inline
const client = spawn('node', 'Child.js')


client.stdout.on('data', (chunk) => {
    const line = chunk.toString().trim()
    try {
        const data = JSON.parse(line)
        console.log("process the data", data)

    } catch (e) {
        console.warn("throwing error")
    }
})

client.stderr.on('data', (chunk) => {
    const error = client.toString().trim()
    console.error(error)
})



const client2 = spawn('node', ['Child2.js'])

client2.stdout.on('data', (chunk) => {
    const line = chunk.toString().trim()

    console.log(line)
})

client2.stderr.on('data', (chunk) => {
    const error = chunk.toString().trim()
    console.log(error)
})

//Send command to the child
setTimeout(() => {
    console.log("sending stop")
    client2.stdin.write('stop\n')
}, 3000)


setTimeout(() => {
    client2.stdin.write('start\n')
}, 6000)

setTimeout(() => {
    client2.stdin.end()
    client.kill()
}, 10000);

