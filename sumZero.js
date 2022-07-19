
// ==============================================================================================
// check sum to two element in a given array is zero
// const array=[-5,-4,-3,-2,-1,0,1,2,3,4,6,7];
// function sumOfTwoNoIsZero(array){
//     for(var number of array){
//         // console.log(number)
//         for(var j=1;j<array.length;j++){
//             if(number + array[j]===0){
//                 return [number,array[j]]
//             }
//         }
//     }
// }

// const result = sumOfTwoNoIsZero([-5,-4,-3,-2,-1,0,1,2,3,4,6,7])
// console.log(result)

// const array=[3,5,2,6,-6,-3,-4,-2]

// let arr =array.sort()
// console.log(arr)
// function sumOfTwoNoIsZero(arr){
//     for(var number of arr){
//         console.log(number)
//         for(var j=1;j<arr.length;j++){
//             if(number+arr[j] === 0){
//                  return [number,arr[j]]
//             }
//         }
//     }
// }
// const result = sumOfTwoNoIsZero(arr)
// console.log(result)

const array=[3,5,2,6,-6,-3,-4,-2];
let arr =array.sort()//here we are first short the array
console.log(arr)//here we get the shorted array
// [  -2, -3, -4, -6,  2,  3,  5,  6]
function sumOfTwoNoIsZero(arr){
    var left=0;
    var rigth = arr.length-1;
    while(left < rigth){
        sum=arr[left]+arr[rigth];
        if(sum===0){
            return [arr[left],arr[rigth]]
        }else if(sum>0){
            rigth--
        }else
        {
            left++
        }
    }
}
const result = sumOfTwoNoIsZero(arr)
console.log(result)

