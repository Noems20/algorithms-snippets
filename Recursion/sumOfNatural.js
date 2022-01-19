const sumOfNatural = (num) => {
  if (num <= 1) return num;

  return num + sumOfNatural(num - 1);
};

console.log(sumOfNatural(10));
console.log(sumOfNatural(5));
console.log(sumOfNatural(2));
