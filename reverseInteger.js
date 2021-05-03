'use strict';

function reverse(x) {
    
    let answer = [];
    let isNegative = x < 0 ? true : false;
    
    // num => str (-123 => "-123")
    let str = x.toString();
    let n = str.length;
    
    // answer = ['3', '2' ,'1' ,'-']
    for(let i = 0; i < n; i++) {
        answer.push(str[n-(i+1)]);
    }
    
    // if negative, remove the last char!
    // answer = ['3', '2' ,'1' ,'-'] => ['3', '2', '1'']
	if (isNegative) answer.pop();
    
    // join each char
    // answer = ['3', '2', '1'] => '321'
    answer = answer.join('');
    
    // str -> num ('321' => 321)
    answer = Number(answer);

    // if negative, 321 => -321
    if (isNegative) answer = -answer;
    
    // check the range (return 0 if it's not in the range)
    if (answer < -Math.pow(2, 31) || answer > Math.pow(2, 31) - 1) answer = 0;
    
    // return 321
    return answer;
}

// let x = -123;
// console.log(reverse(x));

