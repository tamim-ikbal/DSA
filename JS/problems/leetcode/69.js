var mySqrt = function (x) {
  if (1 >= x) {
    return x;
  }
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sqr = mid * mid;
    if (sqr === x) {
      return mid;
    } else if (sqr > x) {
      right = mid - 1;
    } else if (sqr < x) {
      left = mid + 1;
    }
  }
  return right;
};
for (let index = 0; index <= 20; index++) {
  console.log(index + " sqrt is: " + mySqrt(index));
}

console.log("20" + " sqrt is: " + mySqrt(20));
