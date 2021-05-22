'use strict';

const strStr = (haystack, needle) => {
    
	if (!needle) return 0;

	let indexOfNeedle = haystack.indexOf(needle);

    if (needle && indexOfNeedle === -1) {
		return -1;
	}
	
	if (needle && indexOfNeedle !== -1) {
		return indexOfNeedle;
	}
	
}