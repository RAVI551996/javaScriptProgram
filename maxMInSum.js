function miniMaxSum(arr) {
    var soma = 0
    for (var i = 0; i < arr.length; i++) {
        soma += arr[i]
        max = soma - arr[i]
    }
    let min = soma - arr[0]
    return max + ' ' + min
}

console.log(miniMaxSum([1,2,3,4,5]))  


// ==============================================================================================
const arr = [5,4,3,2,1];

function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log((sum - maxVal) + ' ' + (sum - minVal));
}
miniMaxSum(arr)