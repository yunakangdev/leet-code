'use strict';

function containsDuplicate(nums) {
  let answer = false;

  // .forEach can't terminate(return) once it starts
  nums.forEach((num, index) => {
      if (nums.indexOf(num) !== index) answer = true;
  });
  
  return answer;
}