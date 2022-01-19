// Brute force
// O(2^(n + m)) time | O(n + m) space
// const gridTraveler = (m, n, memo = {}) => {
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   return gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
// };

// Memoization
// O(m * n) time | O(n + m) space
// m - rows, n - columns
const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  if (key in memo) return memo[key];
  // Don't check if child key is in memo
  // if ((m - 1 + ',' + n) in memo) DON'T
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
