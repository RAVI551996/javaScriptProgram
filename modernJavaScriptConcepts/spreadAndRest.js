// Rest and spread opreater
// Both are use in array and object
// Rest use in arrya:- use for combine the rest element
// =========================================
// function sum(a,b,...rest){
//     console.log(rest)
//     return a+b
// }
// console.log(sum(2,3,4,5,6,7));

// spread use in array:- use for divide the rest element
// =======================================
// var name=["ravi","shankar","mehta"]
// function getName(name1,name2,name3){
//     console.log(name1,name2,name3)
// }
// getName(name[0],name[1],name[2])
// getName(...name)//here we are using spread operator
// getName(name)

// rest use in object
var student = {
  name: "ravi",
  age: 26,
  hobbies: ["cricket", "singing"],
};
// const age=student.age;
const { ...rest } = student; //destructuring
console.log(rest);

// spread use in object
var newStudent = {
  ...student,
  name: "munna",
};
console.log(newStudent);
