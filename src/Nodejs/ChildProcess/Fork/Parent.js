import { fork } from 'child_process'

const child = fork('./Child.js')

child.on('message', (msg) => {
    if (msg.type === 'log') {
        console.log("message from child")
    }
})

child.on('error', (err) => {
    console.log(err)
})

child.on('exit', (code) => {
    console.log()
})

setTimeout(() => {
    child.send({ command: 'stop' })
}, 3000);

setTimeout(() => {
    child.send({ command: 'start' })
}, 5000)

setTimeout(() => {
    child.kill()
}, 10000)