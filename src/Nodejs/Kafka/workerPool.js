const { Worker } = require('node:worker_thread')
const path = require('path')
const os = require('os')

const pool_size = os.cpus().length;
const workers = []
const taskCallback = new Map()


//Create worker pool

for (let i = 0; i < pool_size; i++) {
    const worker = new Worker(
        path.resolve(__dirname, 'logParser.worker.js')
    )

    worker.isBusy = false;

    worker.on('message', ({ taskid, result }) => {

    })

    workder.on('error', (err) => {
        worker.isBusy = false;
        console.log(err)
    })

}