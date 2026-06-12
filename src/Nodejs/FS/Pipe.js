import fs, { read } from 'fs'
import express from 'express'

app = express()

app.get("/logs", (req, res) => {
    const readStream = fs.createReadStream('./file.txt', {
        highWaterMark: 64 * 1024
    })

    readStream.pipe(res) //Automatically backpressure handing

    readStream.on('error', (err) => {
        res.status(404).json({ error: 'Log not found' })
    })
})
