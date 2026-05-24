/*
Simple Fun #176: Reverse Letter

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".

Input/Output
  [input] string str
  [output] a string

A string consists of lowercase latin letters, digits and symbols. 
*/

function reverseLetter(str) {
  let reversedStr = "";
  const maxIndex = str.length - 1;

  for (let i = maxIndex; i >= 0; i--) {
    if (/[^a-z]/.test(str[i])) {
      reversedStr = reversedStr + "";
    } else {
      reversedStr = reversedStr + str[i];
    }
  }

  return reversedStr;
}

console.log(reverseLetter("ultr53o?n"));
