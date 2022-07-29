
// find the Smallest sub string in string

const str = "Hellp! This is Ravi Shankar Mehta";

const smallestStr=(str)=>{
    const sortStr = str.split(' ');
    console.log(sortStr)
    const sortStrArry = sortStr.sort((strA,strB)=>{
        return strB.length - strA.length
    })
    return sortStrArry[sortStrArry.length-1]
}
console.log(smallestStr(str));