'use strict';

function moveZeroes(nums) {

    let j = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] === 0) {
            nums.splice(j, 1);
            nums.push(0)
        } else {
            j++;
        }
    }
    
    return nums;
}

// let nums = [0, 1, 0, 3, 12];
// console.log(moveZeroes(nums));