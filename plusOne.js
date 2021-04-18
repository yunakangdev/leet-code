'use strict';

function plusOne(digits) {
    let answer = [];
    
    // array => str => number
    answer = BigInt(digits.join('')); // 999

    answer++;   // 1000
    
    return answer.toString().split('').map(x => +x); // [1, 0, 0, 0]
}

let digits = [9, 9];
console.log(plusOne(digits));