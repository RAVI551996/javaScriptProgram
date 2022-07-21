// find the longest word in the string.

const str = "Hellp! This is Ravi Shankar Mehta";

const longestStr=(str)=>{
    const sortStr = str.split(' ');
    const sortStrArry = sortStr.sort((strA,strB)=>{
        return strB.length - strA.length
    })
    return sortStrArry[0]
}
console.log(longestStr(str));