const cluster = require('node:cluster')
const os = require('os')

if (cluster.isPromary) {
    const numCpus = os.cpus.length;

    for (let i = 0; i < numCpus; i++) {
        cluster.fork()
    }

    cluster.on('error', (worker) => {
        cluster.fork()
    })
} else {
    const express = require('express')
    const app = express()

    app.get('/api/', (req, res) => {
        res.json({ status: 200 })
    })

    app.listen(4000, () => console.log("Server is running"))
}