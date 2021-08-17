/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (!s) return 0;
    let result = Array(s.length);
    result.fill(0);
    let lpIdxStack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            lpIdxStack.push(i);
        } else {
            if (lpIdxStack.length > 0) {
                result[i] = result[i-1] + 2;
                let lpIdx = lpIdxStack.pop();
                if (lpIdx > 0) {
                    result[i] += result[lpIdx-1];
                }
            }
        }
    }
    
    return Math.max(...result);
};