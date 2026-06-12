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

const pool = new Piscina({
    filename: new URL('./transform.worker.js', import.meta.url).href,
    maxThreads: 4
});

const tasks = [
    { data: [1, 2, 3], multiplier: 10 },
    { data: [4, 5, 6], multiplier: 20 },
    { data: [7, 8, 9], multiplier: 30 },
];

// Fire all tasks concurrently — Piscina queues and distributes automatically
const results = await Promise.all(
    tasks.map(task => pool.run(task))
);
console.log(results);

//Worker implementation
export default async function transform(payload) {
    const { data, multiplier } = payload;
    // Simulate CPU-bound transformation
    const result = data.map(n => n * multiplier);
    return { result, processedBy: `thread-${process.pid}` };
}