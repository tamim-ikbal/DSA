var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let target = mid * mid;
    if (num === target) {
      return true;
    } else if (num > target) {
      left = mid + 1;
    } else if (num < target) {
      right = mid - 1;
    }
  }
  return false;
};

for (let index = 1; index <= 37; index++) {
  console.log(index + "is perfect square: " + isPerfectSquare(index));
}
