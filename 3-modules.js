//modules

// our main code will be in one file which we will run but parts of our code will be distributed in modules as to make things easier to comprehend et cetera. dividing code into modules will also lead to smaller files and more structure to our application

//CommonJS, every file is a module (by default)
//Modules are - encapsulated code (meaning only share minimum code)

//here we are accessing the names file. note: we can only access whatever the file is exporting
const names = require('./4-names')
// console.log(names)

//here we are accessing the utils file which contains our required function 'sayHi'
const sayHi = require('./5-utils')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const data = require('../2. node js/6-alternative-flavor')
// console.log(data.items)

require('./7-mind-grenade')

//important note. the line where we are using 'require' which accesses data from other file; here the variable names can be set to anything. for example we can write the following line
// const people = require('./4-names')
// console.log(people)
//the above line will give the same output