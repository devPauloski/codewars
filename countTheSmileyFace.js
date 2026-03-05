function countSmileys(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let eyes = arr[i].includes(":") || arr[i].includes(";");
    let smilingMouth = arr[i].includes(")") || arr[i].includes("D");
    
    if (eyes && smilingMouth) {
      count = count + 1;
    }
  }
  
  return count;
}

console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([";~)" , ":oD" , ";oD" , ":o>" , ";D" , ":-)" , ";D"]));