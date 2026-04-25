import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

function transformInWorker(payload) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./transform.worker.js', {
            workerData: { payload }
        });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
}

// Option 2 — use Piscina worker pool (production grade)
import Piscina from 'piscina';
const pool = new Piscina({ filename: './transform.worker.js' });
const result = await pool.run({ payload });