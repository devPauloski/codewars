/*Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
*/

function findUniq(arr) {
  const numbers = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in numbers)) {
      numbers[arr[i]] = 1;
    } else {
      numbers[arr[i]] = numbers[arr[i]] + 1;
    }
  }

  for (property in numbers) {
    if (numbers[property] === 1) {
      return Number(property);
    }
  }
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));