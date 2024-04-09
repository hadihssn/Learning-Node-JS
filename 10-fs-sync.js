// synchronous file system operations
// synchronous method is blocking, meaning that it will block the code from executing until the operation is complete

const { readFileSync, writeFileSync } = require('fs')
// a similar way to write the above line would be:
// const fs = require('fs')
// fs.readFileSync

// read file sync requires two parameters: the file path and the encoding
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, "\n", second)

// write file sync requires two parameters: the file path and the content to write
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first + second}`,
    { flag: 'a' }
)

// 👆 without using the third argument flag: 'a', the contents of the specified file will always be overwritten. if this parameter is given, the file will be appended to instead of overwritten

