//setup - name of our setup and passing in the module we require
const path = require('path')

//separator method
console.log(path.sep)

//join method
const filePath = path.join('/content', 'subFolder', 'test.txt')
console.log(filePath)

//resolve method
const absolute = path.resolve(__dirname, 'content', 'subFolder', 'test.txt')
console.log(absolute)