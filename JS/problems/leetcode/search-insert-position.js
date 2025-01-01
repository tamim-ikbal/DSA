var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  //edge catch
  if (nums[left] > target) {
    return 0;
  }
  if (nums[right] < target) {
    return right + 1;
  }

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  if (nums[mid] > target) {
    return mid;
  }
  return mid + 1;
};

const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5));
console.log(searchInsert(nums, 2));
console.log(searchInsert(nums, 7));

const nums2 = [1, 3];
console.log(searchInsert(nums2, 2));
