// Maximum Length Difference

// You are given two arrays a1 and a2 of strings. 
// Each string is composed with letters from a to z. 
// Let x be any string in the first array and y be any string in the second array.
// Find max(abs(length(x) − length(y)))
// If a1 and/or a2 are empty return -1 in each language except
// in Haskell (F#) where you will return Nothing (None).

// Example
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  } else {
    const firstArr = [...a1].map(item => item.length);
    const secondArr = [...a2].map(item => item.length);
    const max1 = Math.abs(Math.min(...firstArr) - Math.max(...secondArr));
    const max2 = Math.abs(Math.max(...firstArr) - Math.min(...secondArr));
    
    return Math.max(max1, max2);
  }
}
