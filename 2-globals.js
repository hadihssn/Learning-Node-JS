//globals

//some useful global variables
/*
* __dirname  -> gives the path to current directory
* __filename -> file name
* require    -> function to use modules (CommonJS)
* module     -> info about current module (file)
* process    -> info about environment where the program is being executed
*/

console.log(process)

var i = 0

setInterval((i)=>{
    console.log("Hello World" + i);
    i++
}, 1000)

//learn how to pass variable in above situation