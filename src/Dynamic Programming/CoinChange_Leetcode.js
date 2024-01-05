/**
##Coin Change
You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1
 */

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
        for (let coin of coins) {
            if (currentAmount - coin >= 0) {
                dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount - coin]);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

console.log("result", coinChange([1, 2, 5], 11));
