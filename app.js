// asynchronous file system operations
// asynchronous method is non-blocking, meaning that it will not block the code from executing while the operation is being completed 

const { readFile, writeFile, write } = require('fs')
// a similar way to write the above line would be:
// const fs = require('fs')
// fs.readFileSync

// for the asynchronous method, we need to provide a callback function.
// a callback function means that the function will be called once the operation(code or whatever functionality we are running) is complete.this is similar to addEventListener working with a button(click event) where we pass in a callback function. that callback functions runs everytime the button is clicked.

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result

        writeFile('./content/result-async.txt', `Here is the data from the async code ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(`Here is the data from the async code ${first}, ${second}`)
        })
    })
})
