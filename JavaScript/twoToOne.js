/* Two to One

Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string (alphabetical ascending),
the longest possible, containing distinct letters - each taken
only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


function longest(s1, s2) {
  // your code
  const combinedString = s1 + s2;
  const distintValues = { };

  for (let i = 0; i < combinedString.length; i++) {
    if (combinedString[i] in distintValues) {
      distintValues[combinedString[i]] = distintValues[combinedString[i]] + 1;
    } else {
      distintValues[combinedString[i]] = 1;
    }
  }

  const uniqueValues = Object.keys(distintValues);
  return uniqueValues.sort().join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));