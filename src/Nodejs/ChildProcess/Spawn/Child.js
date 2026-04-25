/**
 * This is for spawn stdout and stderror
 * Data is moving child to parent
 */
setInterval(() => {
    console.log(`${new Date()} 'Log has been produced, and log id' ${new Date().getMilliseconds()}`)
}, 1000)


/**
 * Moving data from parent to child and then parents
 */

