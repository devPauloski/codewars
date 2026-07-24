function incrementString (strng) {
  let stringValue = "";
  let numberValue = "";
  
  for (let i = 0; i < strng.length; i++) {
    if (/[0-9]$/.test(strng[i])) {
      numberValue = numberValue + strng[i];
    } else {
      stringValue = stringValue + strng[i];
    }
  }

  const digitCount = numberValue.length;
  const increaseNumber = Number(numberValue) + 1;
  let stringNumber = String(increaseNumber);
  const zeroCount = digitCount - stringNumber.length;

  let zeroes = "";
  for (let i = 0; i < zeroCount; i++) {
    zeroes = zeroes + "0";
  }

  stringNumber = zeroes + stringNumber;

  return stringValue + stringNumber;

}

console.log(incrementString ("fo99obar99"));
