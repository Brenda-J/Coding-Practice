/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length - 1] === 9){
        if (digits.length === 1) {
            digits[0] = 0;
            digits.unshift(1);
        }
        else{
            digits[digits.length - 1] = 0;
            let i = digits.length - 2;
            while (i > 0 && digits[i] === 9) {
                digits[i] = 0;
                i--;
            }
            if (digits[i] === 9) {
                digits[i] = 0;
                digits.unshift(1);
            }else{
                digits[i] += 1;
            }
        }
    }
    else{
        digits[digits.length - 1] += 1;
    }
    return digits;
};