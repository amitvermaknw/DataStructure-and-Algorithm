let interval = 1000
let timer

function startLogging() {
    timer = setInterval(() => {
        const payload = {
            timestamp: new Date(),
            logId: new Date().getMilliseconds()
        }
        console.log(payload)
    }, interval)
}

startLogging()

//stdin- Listen the command from the parents

process.stdin.on('data', (chunk) => {
    const command = chunk.toString().trim()

    if (command === 'stop') {
        clearInterval(timer)
        console.log('stopped')
    } else if (command === 'start') {
        startLogging()
        console.log('start')
    }
})