const arr = [1, 2, 1, 3, 4, 3, 5];
var sortarr=arr.sort()


// const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arr);
// console.log(duplicateElements);

function toFindDuplicates(){
    var result = [];
    for(var i=0;i<sortarr.length-1;i++){
        if(sortarr[i]==sortarr[i+1]){
            result.push(sortarr[i+1]) 
        }
    }return result
}
console.log(toFindDuplicates(sortarr))