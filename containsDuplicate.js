'use strict';

function containsDuplicate(nums) {
    
  let answer = false;

  nums.forEach((num, index) => {
    if (nums.indexOf(num) !== index) answer = true;
  });
  
  return answer;
}

// let nums = [1,1,1,3,3,4,3,2,4,2];
// console.log(containsDuplicate(nums));    // true