'use strict';

const repeatedSubstringPattern = (s) => {

	if (s.length === 1) return false;

	// make a function to get the index of the alphabet
	const getIndexInAlphabet = (char) => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
		let index = alphabet.indexOf(char.toLowerCase());

		if (index !== -1) return index;
	}

	// make an array to record how many times each alphabet is duplicated
	//  a, b, c, d...
	// [0, 0, 0, 0...]
	let countDuplicatedAlphabet = Array.from({length: 27}, () => 0);

	s.split('').map((char, index) => {
		// find the index of the alphabet
		let i = getIndexInAlphabet(char); // a => 0

		// increment the counter of each alphabet when it is duplicated
		countDuplicatedAlphabet[i]++;	  // [1, 0, 0, 0...]
	});

	console.log(countDuplicatedAlphabet);

	// check the number of incremented alphabets
	let DuplicatedAlphabet = countDuplicatedAlphabet.filter(count => count > 0);

    // s = "abab";                  // s.length = 4
    // duplicatedAlphabet = "ab";   // duplicatedAlphabet.length = 2
    // 4 % 2 === 0
    
	if (s.length % DuplicatedAlphabet.length === 0) {
		return true;
	} else return false;
}

let s = "abab";
console.log(repeatedSubstringPattern(s));

