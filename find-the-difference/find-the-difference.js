/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj = {}
    for (let char of s) {
        obj[char] = ++obj[char] || 1
    }
    for(let char of t) {
        if (obj[char] !== undefined && obj[char] > 0) {
            obj[char]--;
        }
        else {
            return char
        }
    }
};