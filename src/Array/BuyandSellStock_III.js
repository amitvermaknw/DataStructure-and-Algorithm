/**
 * 
 * 123. Best Time to Buy and Sell Stock III
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 
Time Complexity - O(n)
spance complexity - O(n)

*/
//Solved using normal buy and sell trick 
function maxProfit(nums) {
    let fb = Infinity, sb = Infinity, fs = 0, ss = 0

    for (let p of nums) {
        fb = Math.min(fb, p)
        fs = Math.max(fs, p - fb)  // when you sell then you make profile on = sale price- buy price

        sb = Math.min(sb, p - fs)  // for second buy your profit will reduce because you use the same money
        ss = Math.max(ss, p - sb)
    }

    console.log(ss)
}



//Solved using dynamic programing
var maxProfit = function (prices) {
    if (prices.length == 0) return 0
    let dp = new Array(prices.length).fill(0);
    for (let t = 1; t <= 2; t++) {
        let min = prices[0];
        let max = 0;
        for (let i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i] - dp[i]);
            max = Math.max(max, prices[i] - min);
            dp[i] = max;
        }
    }
    return dp.pop();
};


//first buy->first sell --> second buy->second sell

function maxProfit(prices) {
    let fb = Number.MIN_SAFE_INTEGER;  //Negative integer number
    let sb = Number.MIN_SAFE_INTEGER; ////Negative integer number
    let fs = 0;
    let ss = 0;

    for (let i = 0; i < prices.length; i++) {
        fb = Math.max(fb, -prices[i]);
        fs = Math.max(fs, fb + prices[i]);

        sb = Math.max(sb, fs - prices[i]);
        ss = Math.max(ss, sb + prices[i]);
    }

    return ss;
}

console.log(maxProfit([1, 2, 3, 4, 5]))