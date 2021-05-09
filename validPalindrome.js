'use strict';

const isPalindrome = function(s) {
  // replace non-alphanumeric chars with '' and convert it to lower case
  s = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    
  // divide the string into 2 (front & end)
  let n = s.length / 2;
  let front, end;


  // if the string is odd number, ignore the char in the center when dividing the char into 2 (front & end)
  if (!n % 1) {
    front = s.slice(0, Math.floor(n));
    end = s.slice(Math.ceil(n));
  } else {
    front = s.slice(0, n);
    end = s.slice(n);
  }

    
  // loop through front & end strings to check if it's panlindrome
  for (let i = 0; i < front.length; i++) {
      console.log(`front[${i}]: ${front[i]}`);
      console.log(`end[end.length - ${i} + 1]: ${end[end.length - (i + 1)]}`);
    if (front[i] !== end[end.length - (i + 1)]) return false;
  }
    return true;
  };

  // let s = "A man, a plan, a canal: Panama";
  // console.log(isPalindrome(s));
