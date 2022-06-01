const BinarySearchPattern = function (array, target) {
  i = -1;
  l = 0;
  r = array.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + r) / 2;

    if (target == array[mid]) {
      return mid;
    } else if (target > array[mid]) {
      l = mid + 1;
    } else target < array[mid];
    r = mid - 1;
  }

  return i;
};
