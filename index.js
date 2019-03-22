const memoize = require('./memoize');

function multiply(a, b) {
  console.log('multiplying...');
  return a * b;
}

const memoizedMultiply = memoize(multiply);

// console.log(multiply(3,5));
// console.log(multiply(3,5));

// console.log(memoizedMultiply(3, 5));
// console.log(memoizedMultiply());
// console.log(memoizedMultiply(3, 5));

function includes(arr, val) {
  console.log('checking...');
  return arr.includes(val);
}

const arr = [1,2,3];
// console.log(includes(arr, 2));
// console.log(includes(arr, 2));


const memoizedIncludes = memoize(includes);

console.log(memoizedIncludes(arr, 4));
// arr.push(4);
const arr2 = [...arr, 4];
console.log(memoizedIncludes(arr2, 4));
