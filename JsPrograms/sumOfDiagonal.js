const arr = [
    [1, 3, 4, 2],
    [4, 5, 3, 5],
    [5, 2, 6, 4],
    [9, 2, 9, 3]
    
 ];
 const diagonalProduct = arr => {
    let product = 0;
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr[i].length; j++){
          if(i === j){
             product += arr[i][j];
          };
       };
    };
    let product1 = 0;
    for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr.length; j++){
          if((i + j)==(arr.length-1)){
             product1 += arr[i][j];
          };
       };
    };

    return product + product1;
    
 };
 console.log(diagonalProduct(arr));