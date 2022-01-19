const isPalindrome = (word) => {
  if (!word || word.length === 1) return true;

  if (word[0] === word[word.length - 1]) {
    // .slice and .substring includes first parameter but no second
    // console.log(word.slice(1, word.length - 1));
    // console.log(word.substring(1, word.length - 1));
    return isPalindrome(word.substring(1, word.length - 1));
  }

  return false;
};

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('kayak'));
console.log(isPalindrome('hannah'));
console.log(isPalindrome('Now'));
