const sayHi = (name) => {
    console.log(`hello there ${name}`)
}

//in this file we need to export our function 'sayHi' since we need it available through-out our application. for exporting this function the following line of code will be written
module.exports = sayHi