/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = maxSum;
    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = nums[i];
        } else {
            currSum += nums[i]
        }
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    return maxSum;
};