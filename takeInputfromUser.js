// "use strict";
// const ps = require('prompt-sync');
// const prompt =ps();
// let name = prompt("enter your name :- ")
// console.log(`hello ${name}`)


// Take a input from user and sum that no
"use strict";
const ps = require('prompt-sync');
var prompt =ps();
var num = prompt("enter first no. :- ")
var num1 = prompt("enter second no. :- ")
function sum(){
    return Number(num)+Number(num1)

}
console.log(sum(num+num1))

