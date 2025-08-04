// Calculate Average
// Write a function which calculates the average of the numbers in a given array.

export function findAverage(array: number[]): number {
  let result:number;
  
  if (array.length === 0) {
    result = 0;
  } else {
    let sum:number = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    
    result = sum / array.length;
  }
  
  return result;
}

console.log(findAverage([1,1, 34]));