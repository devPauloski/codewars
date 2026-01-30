/*
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of 'abad' is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  const splitWords = x.split(" ");
  const scores = [];
  
  for (let i = 0; i < splitWords.length; i++) {
    let word = splitWords[i];
    let score = 0;

    for (let j = 0; j < word.length; j++) {
      score = score + word.charCodeAt(j) - 96;
    }

    scores.push(score);
  }

  const highestScore = Math.max(...scores);
  return splitWords[scores.indexOf(highestScore)];
}

console.log(high('man i need a taxi up to ubud'));