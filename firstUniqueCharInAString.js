'use strict';

function firstUniqChar(s) {

	for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
            return i;
        }
	}

  return -1;
}

// let s = "loveleetcode";
// console.log(firstUniqChar(s));