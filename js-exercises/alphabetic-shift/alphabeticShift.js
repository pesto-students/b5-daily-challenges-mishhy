const alphabeticShift = inputStrings => {
  let shiftedString = '';
  for (const alphabet of inputStrings) {
    shiftedString += String.fromCharCode(alphabet.charCodeAt() + 1);
  }
  return shiftedString;
};

export { alphabeticShift };
