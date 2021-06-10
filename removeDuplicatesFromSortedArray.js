'use strict';

const removeDuplicates = function(nums) {
  // make a function that returns a unique value
  function unique(num, index) {
    return nums.indexOf(num) === index;
  }

  // filter the array with unique values using a separate function
  nums = nums.filter(unique);

  // return the length of the array
  return nums.length;
}

// const removeDuplicates = function(nums) {
// 	// make a Set to store unique values
// 	let set = new Set();

// 	// add each element of the array to the Set
// 	for (let num of nums) {
// 		set.add(num);
// 	}
	
// 	// return the size of the Set
// 	return set.size;
// }

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));