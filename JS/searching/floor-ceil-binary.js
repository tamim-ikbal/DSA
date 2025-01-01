function floorCeil(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  if (array[right] <= target) {
    return `Target is not compatible for celing.`;
  }

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid === 0
        ? `Floor ${mid} and Ceil ${mid + 1}`
        : `Floor ${mid - 1} and Ceil ${mid + 1}`;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    }
  }
  return `Floor ${mid} and Ceil ${mid + 1}`;
}

const array = [10, 20, 30, 40, 50];
console.log(floorCeil(array, 55));
