/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let sub = strs[0];
    let i = 1;
    
    while (i < strs.length && sub.length > 0) {
        if (!strs[i].startsWith(sub)) {
            sub = sub.slice(0, sub.length - 1)
            i--
        }
        i++
    }
    return(sub);
};

