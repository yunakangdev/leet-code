'use strict';

function rotate(nums, k) {
	let left = nums.splice(nums.length - k, k);
	nums.unshift(...left);
	return nums;
}

//  let nums = [1,2,3,4,5,6,7];
//  let k = 3;

//  console.log(solution(nums, k));