/*
so now whatever we want to make public we can put it in 'exports' object and whatever we want to keep private to this file we can leave it like as it is
*/

//keeping 'secret' private to this file
const secret = 'SUPER SECRET'

//making these available to the whole application
const john = 'john'
const peter = 'peter'

//below line will explain module and give its info
//console.log(module)

//here we are telling what do we want to export
module.exports = {john, peter}