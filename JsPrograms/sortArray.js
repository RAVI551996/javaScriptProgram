let arr=[0,1,2,0,1,1,2,3,3,4]
// arr.sort((a,b)=>a-b)
// var sum=0;
// for(var i=0;i<arr.length;i++){
//     var sum = sum+arr[i]
// }
// console.log(sum)
// // if(sum*2>arr.length-1*arr.length-2){
// //     console.log('false') ;
// // }else{
// //     console.log('true')
// // }

var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);