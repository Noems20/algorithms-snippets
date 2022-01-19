// ---------------------------------------------------------------------------
// MEMOIZATION
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// FIBONACCI
// ---------------------------------------------------------------------------

// -------------- O(n^2) time | O(n) space --------------
// const fib = (n) => {
//   if (n <= 2) return 1;

//   return fib(n - 1) + fib(n - 2);
// };

// -------------- O(n) time | O(1) space --------------
// No shift index
// const fib = (n) => {
//   const fibValues = [0, 1];

//   for (let i = 1; i < n; i++) {
//     const temp = fibValues[1];
//     fibValues[1] = fibValues[0] + fibValues[1];
//     fibValues[0] = temp;
//   }

//   return n <= 1 ? fibValues[n] : fibValues[1];
// };

// -------------- O(n) time | O(1) space --------------
// Shift index
// const fib = (n) => {
//   const fibValues = [0, 1];

//   for (let i = 2; i < n; i++) {
//     const temp = fibValues[1];
//     fibValues[1] = fibValues[0] + fibValues[1];
//     fibValues[0] = temp;
//   }

//   return n <= 2 ? fibValues[n - 1] : fibValues[1];
// };

// -------------- O(n) time | O(n) space --------------
// Memoization
// Js object, keys will be args to fn, value will be the return value
const fib = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  // You pass the exact memo object
  // it is like passed by reference, in the function you recive the actual object
  // not a copy
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log('Valor: ', n, ' ', memo);
  return memo[n];
};

// console.log(fib(0)); // Doesn't run with shift idx
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(50)); // Doesn't run on slow fib
// console.log(fib(51)); // Doesn't run on slow fib
