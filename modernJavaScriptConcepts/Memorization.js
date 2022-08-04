// Memorization
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
const cal = (n) => {
  for (var i = 0; i <= n.length - 1; i++) {
    sum += n[i];
  }
  return sum;
};
// console.time()
// console.log(cal(a))
// console.timeEnd()

// Memorization concept
const Memorization = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      // console.log(cache)
      return cache[n];
    } else {
      console.log("calculate first time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};
console.time();
const timeCal = Memorization(cal);
console.log(timeCal(n));
console.timeEnd();

console.time();
// const timeCal=Memorization(cal)
console.log(timeCal(n));
console.timeEnd();
