const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//getting the uptime of the system
const currentUpTime = os.uptime()
console.log(`The system uptime is ${currentUpTime} seconds`)

//getting the info about the current operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)