/**
 * Throttling means limiting how often a function can execute — ensuring it runs at most once per time window, no matter how many times it's called.
 */

function asyncThrottle(fn, wait) {
    let lastCall = 0

    return async function (...arg) {
        const now = Date.now()

        if (now - lastCall >= wait) {
            lastCall = now
            return fn(...arg)
        }
        return null
    }
}


const throttledFetch = asyncThrottle(async (userId) => {
    const res = await fetch(`api/user/${userId}`)
    return res.json()
}, 1500)