/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let grams = {}
  strs.forEach(string => {
      let sorted = string.split('').sort().join('') // sorted by alphabetical order
      !grams[sorted] ? grams[sorted] = [string] : grams[sorted].push(string) // if this combo of letter exist, push str
  })
    
    return Object.values(grams)
};