var isPerfectSquare = function (num) {
  let result = num;
  while (1 < result) {
    result = result / 2;
  }
  return Number.isInteger(result);
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(10));
console.log(isPerfectSquare(49));
console.log(isPerfectSquare(12));
console.log(isPerfectSquare(2147483647));
