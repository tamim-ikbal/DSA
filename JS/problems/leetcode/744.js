var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let mid;

  if (letters[left] > target || letters[right] <= target) {
    return letters[0];
  }

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (letters[mid] === target) {
      if (letters[mid + 1] <= target) {
        left = mid + 2;
        continue;
      }
      return letters[mid + 1];
    } else if (letters[mid] > target) {
      right = mid - 1;
    } else if (letters[mid] < target) {
      left = mid + 1;
    }
  }

  return letters[left];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); //c
console.log(nextGreatestLetter(["c", "f", "j"], "c")); //f
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); //x
console.log(nextGreatestLetter(["a", "d"], "c")); //d
console.log(nextGreatestLetter(["c", "f", "j"], "d")); //f
console.log(nextGreatestLetter(["a", "z"], "m")); //z
console.log(nextGreatestLetter(["a", "c", "e", "g", "i", "k"], "h")); //i
console.log(nextGreatestLetter(["m", "m", "m", "m"], "m")); //m
console.log(nextGreatestLetter(["x", "y", "z"], "w")); //x
console.log(nextGreatestLetter(["a", "b", "c"], "d")); //a
console.log(
  nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e")
); //n
