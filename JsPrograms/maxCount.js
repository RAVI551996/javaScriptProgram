// Maxcount
var candle =[3,2,1,3,3,4,4,4,4,4]
var maxEle=Math.max(...candle)
// console.log(maxEle)
var count=0
for(var i=0;i<candle.length;i++){
    if(candle[i]==maxEle){
        count = count + 1
    }

}
console.log(count)