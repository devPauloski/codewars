// Calculate Average
// Write a function which calculates the average of the numbers in a given array.

export function findAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  } else {
    let sum:number = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    
   return sum / array.length;
  }
}

console.log(findAverage([1,1, 34]));
console.log(findAverage([]));