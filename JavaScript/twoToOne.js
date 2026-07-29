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

  for (const char of combinedString) {
    distintValues[char] = true;
  }

  return Object.keys(distintValues).sort().join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));