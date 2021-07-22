/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let bool = true;
    let lower = -Math.pow(2, 31);
	let upper = Math.pow(2, 31) - 1;
    if (x < 0) {
        bool = false;
        x *= -1;
    }
    let newNum = parseInt(x.toString().split('').reverse().join('')) * (bool ? 1 : -1);
    return newNum >= lower && newNum <= upper ? newNum : 0;
    
};