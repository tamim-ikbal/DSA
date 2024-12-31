function firstOcc(array, target) {
  let occr;
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      occr = mid;
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }

  return mid;
}

function lastOcc(array, target) {
  let occr;
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      if (occr) {
        occr = [...occr, mid];
      } else {
        occr = [mid];
      }
      left = mid + 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }

  return Math.max(...occr);
}

const nums = [10, 20, 89, 89, 89, 100, 120, 140, 140, 140, 400];

console.log(lastOcc(nums, 89)); // 7
