//  o(n^m) time | O(n^m) space
const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [
//     ['purp', 'le'],
//     ['p', 'ur', 'p', 'le']
// ]
console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);
// [
//     ['abc', 'def'],
//     ['ab', 'c', 'def'],
//     ['abcd', 'ef']
//     ['ab', 'cd', 'ef'],
// ]
console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
// [
//   ['enter', 'a', 'p', 'ot', 'ent', 'p', 'ot'],
//   ['enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't'],
//   ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot'],
//   ['enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't'],
// ];

console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // []

// The worst case is if we remove the f, because its going to return a massive array
// of combinations
console.log(
  allConstruct('eeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // []
