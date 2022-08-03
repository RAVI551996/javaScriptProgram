// factorial 
const num=5;
var factorial =1;
function factorialOfNum(){
    if(num<0){
        return 'not a valid number'
    }else{
        for(var i=num;i>1;i--){
            factorial= factorial*i
        }
        return factorial
    }
}
console.log(factorialOfNum(num));