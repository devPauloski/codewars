/* Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// Method 1
function countBits(n) {
  const binaryDigits = [];
  while (n > 0) {
    binaryDigits.push(n % 2);
    n = Math.floor(n / 2);
  }
  
  let count = 0;
  for (let i = 0; i < binaryDigits.length; i++) {
    if (binaryDigits[i] === 1) {
      count = count + 1;
    }
  }
  
  return count;
}

// Method 2
function countBits(n) {
  let bitsCount = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      bitsCount = bitsCount + 1;
    }
    n = Math.floor(n / 2);
  }
  
  return bitsCount;
}

console.log(countBits(1234))