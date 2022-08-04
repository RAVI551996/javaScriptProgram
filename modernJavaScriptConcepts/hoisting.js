// hoisting
// console.log(a) //undefined
// var a=2;
// console.log(a) //o/p 2
// hence hoisting in not for variable

// Hoisting for function
console.log(a())
function a(){
    var a=4;
    return a
}
console.log(a())