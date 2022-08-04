
// normal function for adding
// function sum(a,b,c){
//     return a+b+c
// }
// var res=sum(2,3,4)
// console.log(res);


// here the concepts of closer
// function add(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }
// var data=add(5)
// // console.log(data)
// var data1=data(4)
// // console.log(data1)
// var data3=data1(3)
// console.log(data3)

// here we are using curring
// console.log(add(5)(4)(3))


// In object how we write currying
// const studentDetail={
//     name:'ravi',
//     age:26
// }

// function user(obj){
//     return function(userinfo){
//         return obj[userinfo]
//     }
// }
// var res=user(studentDetail)
// console.log(res('age'),res('name'))

// infinite curring
function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
}
console.log(add(2)(3)(4)(5)(6)())