// O(m^2*n) time | O(m^2) space
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  // m
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      // n
      for (let num of numbers) {
        // m
        const newSubarray = [...table[i], num];
        // When table[i + num] is defined the condition !table[i + num] will always be false
        // the if statement will only be triggered if the other condition is true
        if (!table[i + num] || newSubarray.length < table[i + num].length) {
          table[i + num] = newSubarray;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [25, 1, 2, 5])); // [25, 25, 25, 25]
