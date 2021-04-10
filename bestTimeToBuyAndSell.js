'use strict';

function maxProfit(prices) {
	let sum = 0;

	for (let i = 0; i < prices.length; i++) {
		if (i + 1 < prices.length) {
			if (prices[i] < prices[i + 1]) {
				sum += prices[i + 1] - prices[i];
			}
		}
	}
	return sum;
}

// let prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices));