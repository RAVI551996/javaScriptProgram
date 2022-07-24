// check the given Sting is panindrome
// const str = "ammA"
// const str= "I did, did I?"
// const checkPanlidrome = (str)=>{
//     str = str.replace(/\W/g, '');// here we are removing the space and  character then we are checking
//     str = str.toLowerCase()
//     console.log(str)
//     for (var i=0; i<str.length ;i++){
//         if(str[i] !== str[str.length - 1 -i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPanlidrome(str))

//====================================================================================================

const str = 'ammA';
const checkPanlidrome =(str)=>{
    str = str.replace(/\W/g, '');
    str = str.toLowerCase()
    return str == str.split('').reverse().join('')
}

console.log(checkPanlidrome(str));