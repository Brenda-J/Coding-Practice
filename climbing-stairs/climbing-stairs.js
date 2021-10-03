/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let array = [1, 1];
    for (let i = 2; i <= n; i++) {
        array.push(array[i - 2] + array[i - 1])
    }
    return array[n]
};
