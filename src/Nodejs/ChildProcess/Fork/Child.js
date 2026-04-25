let timer;
let interval = 1000

function startLogging() {
    timer = setInterval(() => {
        console.log('Printing logs')
    }, interval)
}

startLogging()

process.on('message', (msg) => {
    if (msg.command === 'stop') {
        clearInterval()
    } else if (msg.command === 'start') {
        startLogging()
    }
})

