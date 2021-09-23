/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let diff = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
        }
        if (prices[i] - lowest > diff) {
            diff = prices[i] - lowest;
        }
    }
    return diff;
};