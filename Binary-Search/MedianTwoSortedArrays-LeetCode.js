
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let concatArr = [...nums1, ...nums2].sort((a,b) => a-b);
    let first = 0; 
    let end = concatArr.length - 1;
    let mid = Math.floor((first + end) / 2);
    
    if (concatArr.length % 2 === 0) {
      return ((concatArr[mid] + concatArr[mid + 1])/2);
    } else  {
      return concatArr[mid];
    }

};
