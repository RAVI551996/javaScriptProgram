// fibonacci Serice
const num=10;
var a=0,b=1;
var nextTerm;
function fibonacciSerice(num){
    for(var i=2;i<num;i++){
        nextTerm = a+b;
        a=b;
        b=nextTerm;
        console.log(nextTerm)
    }
}
fibonacciSerice(num)