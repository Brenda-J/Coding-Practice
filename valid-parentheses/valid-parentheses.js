/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let openers = ["(", "{", "["];
    let arr = [];
    for (let i = 0 ; i < s.length; i++) {
        if (openers.includes(s[i])) {
            arr.push(s[i])
        } else {
            let lastEle = arr.pop();
            if (pairs[lastEle] !== s[i]) return false;
        }
    }
    return arr.length ? false : true
};

