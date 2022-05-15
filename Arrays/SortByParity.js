//Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers. Return any array that satisfies this condition.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let NewArray = [];
    
    nums.forEach(num => {
        if(num % 2){
         NewArray.push(num)
        } else {
         NewArray.unshift(num)}
    })
    return NewArray;
};