/* String incrementer

Your job is to write a function which increments a string, 
to create a new string.
    If the string already ends with a number, 
    the number should be incremented by 1.
    If the string does not end with a number,
    the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  const match = strng.match(/[0-9]+$/);
  const numberAtTheEnd = match ? match[0]: "";
  const increaseNumber = String(Number(numberAtTheEnd) + 1);
  const zeroCount = numberAtTheEnd.length - increaseNumber.length;
  
  let zeroes = ""
  for (let i = 0; i < zeroCount; i++) {
    zeroes = zeroes + "0";
  }

  const numberPart = zeroes + increaseNumber;
  const prefix = strng.replace(/[0-9]+$/,"");
  return prefix + numberPart;
}

console.log(incrementString ("fo99obar"));
console.log(incrementString ("fo99obar0019"));
