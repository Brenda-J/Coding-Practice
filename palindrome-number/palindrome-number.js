/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed;
    reversed = parseInt(x.toString().split('').reverse().join(''))
    return x === reversed;
};