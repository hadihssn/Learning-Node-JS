//this alternative method of exporting is commonly called as 'export as you go'. here we are exporting our data as soon as we create it. so for example we would be exporting our data in the same line as we would be creating it.

//below is an array of items having two items. now let us look at the two method of exporting this. one the conventional way and the other the alternative way
items = ['item1', 'item2']

//conventional way of exporting
module.exports = items

//alternative way of exporting. both will do the same thing
// module.exports.items = ['item1', 'item2']

//now let us look at the alternative way of exporting an object
const person = {
    name: 'bob',
}

//the object person will be exported and be available, both by the name of 'singlePerson'
module.exports.singlePerson = person

//the object 'person' can also be exported as following
// module.exports.person = {
//     name: 'bob',
// }