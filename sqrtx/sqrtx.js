/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
     let i = 0;
  let value = 0;
    while(value < x){
      value = i * i; 
      if(value < x)
      i++; 
    }
    return value == x? i: i-1;
};
