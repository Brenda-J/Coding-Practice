/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = str => {
  str = str.trim().split(' ');
  let word = str[str.length - 1];
  return word.length;
};