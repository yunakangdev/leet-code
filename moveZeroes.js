'use strict';

function moveZeroes(nums) {
	let indexZeroes = [];

	nums.forEach((num, index) => {
		if (num === 0) {
			indexZeroes.push(index);
		}
	})

	for(let i = 0; i < indexZeroes.length; i++) {
		nums.splice(indexZeroes[i] - i, 1);
        nums.push(0);
	}

	return nums;
}

// let nums = [0, 1, 0, 3, 12];
// console.log(moveZeroes(nums));