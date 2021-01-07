const alphabeticShift = inputStrings => inputStrings.split('').map((alphabet) => String.fromCharCode(alphabet.charCodeAt() + 1)).join('');

export { alphabeticShift };
