const arr = [2, 1, 4, 3, 6, 5];
function swapArrElement() {
  var result = [];
  var swap = "";
  for (var i = 0; i <= arr.length - 1; i += 2) {
    result = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = result;
  }
  for (var i = 0; i <= arr.length - 1; i++) {
    swap += arr[i] + " ";
  }
  return swap;
}
console.log(swapArrElement(arr));