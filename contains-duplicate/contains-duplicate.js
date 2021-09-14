/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let pairs = {[nums[0]]: true};
    for (let i = 1; i < nums.length; i++) {
        if (pairs[nums[i]]) {
            return true;
        } 
        pairs[nums[i]] = true
    }
    return false;
};
