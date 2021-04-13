'use strict';

function singleNumber(nums) {

	let duplicatedNums = [];
    nums.map((num, index) => {
		if (nums.indexOf(num) !== index) {
			duplicatedNums.push(num);
		}
	});

	let answer = [];
	nums.map((num) => {
		if (!duplicatedNums.some(elem => elem === num)) answer.push(num);
	});
	return answer;
}

let nums = [2,2,1];
console.log(singleNumber(nums));