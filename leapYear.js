// Leap Year
// const Year = 2032

// if(Year%4==0){
//     console.log("leap year")
// }else{
//     console.log("not a leap year")
// }

// 
// var years ="2032,2018,2012,2008,2001"
// var yearArr= years.split(',');
//  for(var i=0; i<=yearArr.length-1;i++){
//     if(yearArr[i]%4==0){
//         console.log(yearArr[i] +" leap year")
//     }else{
//         console.log(yearArr[i] +" not a leap yar")
//     }
//  } 

var yearArr=['2012','2018','2098','2014']
for(var i=0; i<=yearArr.length-1;i++){
        if(yearArr[i]%4==0){
            console.log(yearArr[i] +" leap year")
        }else{
            console.log(yearArr[i] +" not a leap yar")
        }
}