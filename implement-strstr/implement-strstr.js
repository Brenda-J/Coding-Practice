/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      if (needle.length === 0) return 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needle.length) === needle) {  
            return i;  
        }
        
    }
    return -1;
};