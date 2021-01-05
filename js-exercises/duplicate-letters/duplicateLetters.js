/* eslint-disable operator-assignment */
function maxFrequencyFunc(letters) {
  let max = 1;
  const frequencyMap = new Map();
  for (const letter of letters) {
    if (frequencyMap.has(letter)) {
      const frequentOfLetter = frequencyMap.get(letter) + 1;
      frequencyMap.set(letter, frequentOfLetter);
      max = frequentOfLetter > max ? frequentOfLetter : max;
    } else {
      frequencyMap.set(letter, 1);
    }
  }
  return max;
}
function duplicateLetters(letters) {
  const maxFrequency = maxFrequencyFunc(letters);
  return maxFrequency > 1 ? maxFrequency : false;
}

export { duplicateLetters };
