'use strict';

function intersect(nums1, nums2) {
	nums1.sort(function(a, b) {return a - b});
	nums2.sort(function(a, b) {return a - b});

	let answer = [];

	let i = 0, j = 0;
	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) i++;
		else if (nums1[i] > nums2[j]) j++;
		else {
			answer.push(nums1[i]);
			i++;
			j++;
		}	
	}
	return answer;
}

// let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// console.log(intersect(nums1, nums2));