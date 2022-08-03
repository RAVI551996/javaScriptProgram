// Example of clouser 
// ======================
// If we are calling function and that function return another function then the value of first function
// don't loss it retain that value of 1st function into another function this concept is called clouser
// ====================================================================================================
// var sum=function(a){
// console.log(a)
// var c=4;
// return function(b){
//     return a+b+c
// }
// }
// var result= sum(2)
// console.log(result(5))

// another Example
function sum(a, b, c) {
    return {
        getSumTwo: function () {
            return a + b
        },
        getSumThree: function () {
            return a + b + c
        }
    }
}
var result=sum(2,3,4)
console.log(result.getSumTwo())
console.log(result.getSumThree())