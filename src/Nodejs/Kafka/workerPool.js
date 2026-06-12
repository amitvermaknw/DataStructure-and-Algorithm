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

//For worker thread external library
import Piscina from 'piscina'

const pool = new Piscina({
    filename: 'transform.worker.js',
    maxThreads: 4
})


/**
 * Worker child
 */

import { parentPort, workerData, isMainThread } from 'node:worker_threads';

if (isMainThread) {
    return ('worker must not run on in main')
}

parentPort.on('message', ({ taskid, value }) => {
    const result = heaveyProcess(value)

    parentPort.postMessage({ taskId, result })
})
