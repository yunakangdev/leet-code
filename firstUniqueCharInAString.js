'use strict';

function firstUniqChar(s) {

	s = s.split('');

	for (let i = 0; i < s.length; i++) {
		let duplicateCounter = 0;
		for (let j = i + 1; j < s.length; j++) {
			if (s[j] === s[i]) duplicateCounter++;
		}
		if (duplicateCounter === 0) return s[i];
	}

  return -1;
}

// let s = "loveleetcode";
// console.log(firstUniqChar(s));