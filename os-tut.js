const { log } = require('console')
const os = require('os')
const user ='the has been on for '+ os.uptime() + ' seconds'

const systemData = {
    version : `the system version is ${os.type()}`,
    realease : `the release date was ${os.release()}`,
    memory : `Total Memory space is ${os.totalmem()}`,
    availableMemory : `Memory space available is ${os.freemem()}`
}

console.log(user,'\n',systemData);