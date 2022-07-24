// Left triangle pattern in javascript
// ==========================================================================
// *
// **
// ***
// ****
// *****

// let n = 10;
// let string = '';
// for(var i = 1 ;i<=n ; i++){
//     for(var j=0 ;j < i ;j++){
//         string += '*'
//     }
//      string += '\n'
// }
// console.log(string)

// Right Tringale patten
// ====================================================================
//      *
//     **
//    ***
//   ****
//  *****
// let n = 10;
// let string = "";
// for (var i = 1; i <= n; i++) {
//   // print space
//   for (var j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (var k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Downward Triangle Star Pattern
// =====================================================================================
// *****
// ****
// ***
// **
// *

// let n = 10;
// let string = '';
// for(var i = 1 ;i<=n ; i++){
//     for(var j=0 ;j < n-i ;j++){
//         string += '*'
//     }
//      string += '\n'
// }
// console.log(string)

// Pyramid star pattern
//    *
//   ***
//  *****
// *******
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
