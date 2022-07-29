// Left triangle pattern in javascript
// ==========================================================================
// *
// **
// ***
// ****
// *****

// let n=5;
// var str='';
// for(var i=0;i<=n;i++){
//     for(var j=0;j<=n;j++){
//         if(j<=i){
//             str = str+'*'
//         }else{
//             str = str+" "
//         }
//     }
//     str = str+"\n"
// }
// console.log(str)


// Right Tringale patten
// ====================================================================
//      *
//     **
//    ***
//   ****
//  *****
// let n=5;
// var str='';
// for(var i=0;i<=n;i++){
//     for(var j=0;j<=n;j++){
//         if(j<=n-i){
//             str = str+' '
//         }else{
//             str = str+"*"
//         }
//     }
//     str = str+"\n"
// }
// console.log(str)
// Downward Triangle Star Pattern
// =====================================================================================
// *****
// ****
// ***
// **
// *

// let n=5;
// var str='';
// for(var i=0;i<=n;i++){
//     for(var j=0;j<=n;j++){
//         if(j<=n-i){
//             str = str+'*'
//         }else{
//             str = str+" "
//         }
//     }
//     str = str+"\n"
// }
// console.log(str)
// **********************************
// ++++++++++++++++++++++++++++++++++
// let n = 10;
// let string = '';
// for(var i = 1 ;i<=n ; i++){
//     for(var j=0 ;j < n-i ;j++){
//         string += '*'
//     }
//      string += '\n'
// }
// console.log(string)

//     *
//    **
//   ***
//  ****
// *****

// let n=5;
// var str='';
// for(var i=0;i<=n;i++){
//     for(var j=0;j<=n;j++){
//         if(j<=n-i){
//             str = str+' '
//         }else{
//             str = str+"*"
//         }
//     }
//     str = str+"\n"
// }
// console.log(str)

// Pyramid star pattern
//    *
//   ***
//  *****
// *******

// let n = 9;
// var str = "";
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= 9; j++) {
//     if (j >= 6 - i && j <= 4 + i) 
//       str = str + "*";
//      else 
//       str = str + " ";
    
//   }
//   str= str+'\n'
// }
// console.log(str);


// *********
// **** ****
// ***   ***
// **     **
// *       *
// **     **
// ***   ***
// **** ****
// *********
// let n = 9;
// var k = 0;
// var str = "";
// for (i = 1; i <= 9; i++) {
//   i <= 5 ? k++ : k--;
//   for (j = 1; j <= 9; j++) {
//     if (j <= 6 - k || j >= 4 + k)
//      str = str + "*";
//     else 
//     str = str + " ";
//   }
//   str = str + "\n";
// }
// console.log(str);

// let n = 5;
// let string ="";
// for (var i = 1; i <= n; i++) {
//     // printing space
//   for (var j = 1; j <= n - i; j++) {
//     string += " ";
//   }
// //   printing star
//   for (var k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// // reverse pyramid
// =========================================================================
// let n = 5;
// let string ="";
// for (var i = 0; i < n; i++) {
//     // printing space
//   for (var j = 0; j < i; j++) {
//     string += " ";
//   }
// //   printing star
//   for (var k = 0; k < 2 * (n - i)-1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Dimond pattern
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Square pattern
// ==========================================================================================
// *****
// *****
// *****
// *****

// let n = 10;
// let string = '';
// for(var i = 1 ;i<=n ; i++){
//     for(var j=0 ;j < n ;j++){
//         string += '*'
//     }
//      string += '\n'
// }
// console.log(string)

// ****
// *  *
// *  *
// ****

// const n = 5;
// let str = "";
// for (var i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     if (i === 0 || i === n - 1) {
//       str += "*";
//     } else {
//       if (j === 0 || j === n - 1) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   str += "\n";
// }
// console.log(str);

