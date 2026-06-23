/*
Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive
numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77],
the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
  let smallest = numbers[0];
  let indexOfSmallest;

  for (let i = 1; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
      smallest = numbers[i];
    }
  } 

  indexOfSmallest = numbers.indexOf(smallest);
  numbers.splice(indexOfSmallest, 1); 
  let secondSmallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (secondSmallest > numbers[i]) {
      secondSmallest = numbers[i];
    }
  } 

  return smallest + secondSmallest;
}

console.log(sumTwoSmallestNumbers([2, 9, 3]));
console.log(sumTwoSmallestNumbers([1, 5, 13, 9, 3]));
