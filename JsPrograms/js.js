var Arr = [1, 7, 2, 8, 23, 4, 5, 0, 9];

var strarr = Arr.sort((a,b)=>(a-b));
var str1=Arr.reduce((total,arr)=>(total+arr))
console.log(str1);
// for (let i = 0; i <= strarr.length-1; i++) {
//     let flag = 0;
//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         flag = 1;
//         break;
//       }
//     }
//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//       console.log(i);
//     }
//   }
   

