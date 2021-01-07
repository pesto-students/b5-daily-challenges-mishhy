function getNumber(numStr, index, base = 10) {
  if (numStr.length > index) {
    return parseInt(numStr[numStr.length - index - 1], base);
  }
  return 0;
}

function addNumbers(numberString1, numberString2) {
  let result = '';
  let carry = 0;
  const maxCharacter = Math.max(numberString1.length, numberString2.length);
  for (let i = 0; i < maxCharacter; i += 1) {
    const addString = getNumber(numberString1, i) + getNumber(numberString2, i) + carry;
    if (addString > 9) {
      carry = addString / 10;
    } else {
      carry = 0;
    }
    result = (addString % 10) + result;
  }
  return result;
}

console.log(addNumbers('123', '12323234567'));
