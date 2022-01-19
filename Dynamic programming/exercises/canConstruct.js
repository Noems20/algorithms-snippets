// Brute force
// O(n^m * m) time | O(m^2) space
const canConstructBrute = (target, wordBank) => {
  if (target === '') return true;

  for (let word of wordBank) {
    // "potato".indexOf('pot') = 0
    // "potato".indexOf('tato') = 2
    if (target.indexOf(word) === 0) {
      // word = "pot", target = "potato"
      // suffix = "ato", slice starts grabbing characters from the index
      const suffix = target.slice(word.length);
      if (canConstructBrute(suffix, wordBank)) return true;
    }
  }

  return false;
};

// Memoize
// O(n * m^2) time | O(m^2) space
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of wordBank) {
    // "potato".indexOf('pot') = 0
    // "potato".indexOf('tato') = 2
    if (target.indexOf(word) === 0) {
      // word = "pot", target = "potato"
      // suffix = "ato", slice starts grabbing characters from the index
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
); // false
console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
); // true
console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
  ])
); // false
