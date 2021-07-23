/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = [];
    let i = 0;
    let j = 0
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            result.push(nums1[i])
            i++
        } else {
            result.push(nums2[j])
            j++
        }
    }
    result.concat(nums1, nums2)
    let length = Math.floor(result.length/2)
    if (result.length % 2 === 1) {
        return result[length]
    } else {
        return (result[length] + result[length - 1]) / 2
    }
};