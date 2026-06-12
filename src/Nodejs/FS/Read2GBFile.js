const fs = require('fs')
const readline = require('readline')


async function readLargeFile(filepath) {

    const map = new Map()
    const rl = readline.createInterface({
        input: fs.createReadStream('filepath'),
        crlfDelay: Infinity
    })


    for await (const line of rl) {
        const match = line.match(/^(\d+)([a-zA-Z]+)$/)
        if (match) {
            map.set(match[1], match[2])
        }
    }

    return map

}

/**
 * data.txt file has content like this 
 * 123abc\n
 * 23jhdf\n
 * 543jd\n
 */
const map = await buildMap('data.txt')

console.log(map.get('123'))