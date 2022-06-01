/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity. */

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let middle = Math.floor((right - left) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return left;
};
