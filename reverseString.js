// Reverse String 
function reverseString(str){
    var strArr = str.split('');
    console.log(strArr)
    var reverseStrArr = strArr.reverse();
    console.log(reverseStrArr)
    var reversStr = reverseStrArr.join('')
    return reversStr
}

console.log(reverseString('ravi'))