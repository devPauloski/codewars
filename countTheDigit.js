function nbDig(n, d) {
  const squares = [];

  for (let i = 0; i <= n; i++) {
    squares.push(i**2);
  }
  
  const str = squares.join("");
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === d.toString()) {
      count = count + 1;
    }
  }

  return count;
}