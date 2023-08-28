const app =  require("./app");
const fs = require("fs");
const chalk = require("chalk");

// var x = 20;
 

// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

// console.log(arr[4]);

console.log(app.x);
// console.log(app.z());

 const newArray = users.filter((arr1)=>arr1.age >  40 && arr1.occupation === 'programmer')

 console.log(newArray)

 fs.writeFileSync("hello.txt", "hello my name is Mohd niya mul haque");

 console.log(">>", __dirname);
 console.log(">>", __filename);
 console.log(chalk.red('Hello world!'));
