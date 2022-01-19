// Brute force
// O(n^m) time | O(m) space
const allConstructBrute = (target, wordBank) => {
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructBrute(suffix, wordBank);
      const targetWays = suffixWays.map((way) => [word, ...way]); // Get back new array using map
      // console.log(...targetWays);
      result.push(...targetWays);
    }
  }

  return result;
};

// Memoize
// O(n^m) time | O(m) space
const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstructBrute(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]); // Get back new array using map
      // console.log(...targetWays);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
// [
//     ['purp', 'le'],
//     ['p', 'ur', 'p', 'le']
// ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
// [
//     ['ab', 'cd', 'ef'],
//     ['ab', 'c', 'def'],
//     ['abc', 'def'],
//     ['abcd', 'ef']
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
  allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // []

// 3)
// const foo = [1, 2, 3];
// const [n] = foo;
// console.log(n);

// if ([]) console.log('hola');

// const foo = {
//     bar(){
//         console.log('hola')
//     }
//     name:"albert",

// }
