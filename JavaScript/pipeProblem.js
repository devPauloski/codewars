// Lario and Muigi Pipe Problem

// Given a list of unique numbers sorted in ascending order,
//  return a new list so that the values increment by 1 for each 
// index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let firstItem = numbers[0];
  let lastItem = numbers[numbers.length-1];
  let result = [];

  for (let i = firstItem; i <= lastItem; i++) {
    result.push(i);
  }

  return result;
}
