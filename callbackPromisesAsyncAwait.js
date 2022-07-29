// here we are creating the problem after that we are appling to resolve the proble
// callback
// promises
// async await

// here is the problem
const datas = [
  { name: "Ravi", age: 26, Hometown: "Katihar" },
  { name: "Piyush", age: 27, Hometown: "ara" },
];

// function getData() {
//   setTimeout(() => {
//     datas.map((a) => {
//       console.log(a);
//     });
//   }, 1000);
// }

// function setData(newdata) {
//   setTimeout(() => {
//     datas.push(newdata);
//   }, 2000);
// }
// setData({ name: "dipu", age: 22, Hometown: "ara" });
// getData();

// here we are appling the callback function to provious problem

// function getData() {
//     setTimeout(() => {
//       datas.map((a) => {
//         console.log(a);
//       });
//     }, 1000);
//   }

//   function setData(newdata,callback) {
//     setTimeout(() => {
//       datas.push(newdata);
//       callback()
//     }, 2000);
//   }
//   setData({ name: "dipu", age: 22, Hometown: "ara" }, getData);

//   here we are appling the promises to provious problem

// function getData() {
//   setTimeout(() => {
//     datas.map((a) => {
//       console.log(a);
//     });
//   }, 1000);
// }

// function setData(newdata) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       datas.push(newdata);
//       let error = fasle;
//       if (!error) {
//         res();
//       } else {
//         rej("error");
//       }
//     }, 2000);
//   });
// }
// setData({ name: "dipu", age: 22, Hometown: "ara" })
//   .then(getData)
//   .catch((err) => console.log(err));

// Now we are using async await to that problem

function getData() {
    setTimeout(() => {
      datas.map((a) => {
        console.log(a);
      });
    }, 1000);
  }
  
  function setData(newdata) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        datas.push(newdata);
        let error = false;
        if (!error) {
          res();
        } else {
          rej("error");
        }
      }, 2000);
    });
  }

async function start(){
    await setData({ name: "dipu", age: 22, Hometown: "ara" })
    getData();
}
start();