/* Get the Middle Character

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

function getMiddle(s) {
  let textLength = s.length;
  
  if (textLength % 2 === 0) {
    let position = textLength / 2 - 1;
    return s[position] + s[position + 1];
  } else {
    let position = (textLength - 1) / 2;
    return s[position];
  }
}

console.log(getMiddle("test"));
