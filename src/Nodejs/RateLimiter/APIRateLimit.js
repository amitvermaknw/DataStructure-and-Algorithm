const rateLimitMap = new Map()

const RATE_LIMIT = 10
const WINDOW_MS = 60 * 1000. //1 min


function apiRateLimiter(ip) {
    const now = Date.now()
    const userData = rateLimitMap.get(ip) || { count: 0, startTime: now }

    //If the window has expired then reset the count
    if (now - userData.startTime > WINDOW_MS) {
        userData.count = 1
        userData.startTime = now
    } else {
        userData.count++
    }

    rateLimitMap.set(ip, userData)
    return userData.count > RATE_LIMIT
}

if (isRateLimited('192.168.1.1')) {
    console.log("429 Too Many Requests");
}

