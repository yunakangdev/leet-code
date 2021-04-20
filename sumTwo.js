'use strict';

console.clear();

function twoSum(nums, target) {
  let answer = [];
  let j;

  for(let i = 0; i < nums.length; i++) {
  j = 0;
    while (j < nums.length) {			
      if (i !== j && nums[i] + nums[j] === target) {
          answer.push(i);
          answer.push(j);
          return answer;
      }
    j++
    }
  }
}

// let nums = [2,7,11,15];
// let target = 9;

// console.log(twoSum(nums, target));