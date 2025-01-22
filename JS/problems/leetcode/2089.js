// var targetIndices = function (nums, target) {
//   let sorted = nums.sort((a, b) => a - b);

//   let left = 0;
//   let right = sorted.length;
//   let indices = {};

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     console.log("Mid: " + mid);

//     if (sorted[mid] === target) {
//       indices[mid] = mid;
//     } else if (sorted[mid] > target) {
//       right = mid - 1;
//     } else if (sorted[mid] < target) {
//       left = mid + 1;
//     }
//   }

//   console.log(sorted);

//   return indices;
// };

var targetIndices = function (nums, target) {
  let sorted = nums.sort((a, b) => a - b);
  let indices = [];
  for (let index = 0; index < sorted.length; index++) {
    if (sorted[index] === target) {
      indices.push(index);
    } else if (sorted[index] > target) {
      break;
    }
  }
  return indices;
};

let nums = [1, 2, 5, 2, 2];
console.log(targetIndices(nums, 2));

nums = [1, 2, 5, 2, 3];
console.log(targetIndices(nums, 3));

nums = [1, 2, 5, 2, 3];
console.log(targetIndices(nums, 5));

nums = [];
console.log(targetIndices(nums, 5));
