/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let pairs = {}
    for(let i = 0; i < nums.length; i++) {
        if (!pairs[nums[i]]) {
            pairs[nums[i]] = 1
        } else {
            pairs[nums[i]] ++
        }
    }
    for (let key in pairs) {
        if (pairs[key] === 1) {
        return key 
        }
    }
};
    