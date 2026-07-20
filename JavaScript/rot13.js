/* ROT13
ROT13 is a simple letter substitution cipher that replaces
a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string
ciphered with Rot13. If there are numbers or special characters
included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted,
like in the original Rot13 "implementation".
*/

function rot13(message) {
  let result = "";

  for (const char of message) {
    if (/^[A-Za-z]$/.test(char)) {
      const code = char.charCodeAt(0);
      let shiftedCode = code + 13;

      if (char === char.toUpperCase()) {
        if (shiftedCode > 90) {
          shiftedCode = (shiftedCode + 64) % 90;
        }
      } else {
        if (shiftedCode > 122) {
          shiftedCode = (shiftedCode + 96) % 122;
        }
      }

      const shiftedLetter = String.fromCharCode(shiftedCode)
      result = result + shiftedLetter;
    } else {
      result = result + char;
    }
  }

  return result;
}

console.log(rot13("test"));
