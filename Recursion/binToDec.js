const binToDec = (number, result = '') => {
  if (number === 0) return result;

  const remainder = number % 2;
  //   console.log(remainder);
  return binToDec(Math.floor(number / 2), remainder + result);
};

console.log(binToDec(233));
console.log(binToDec(256));
console.log(binToDec(3));
console.log(binToDec(2));
console.log(binToDec(1));
