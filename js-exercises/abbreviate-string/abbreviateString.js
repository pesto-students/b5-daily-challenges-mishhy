import { isString } from 'util';

function abbreviateString(nameString) {
  const error = new Error('invalid parameter');
  if (isString(nameString)) {
    const words = nameString.split(' ');
    return words.length > 1 ? `${words[0]} ${words[words.length - 1][0].toUpperCase()}.` : error;
  }
  throw error;
}

export { abbreviateString };
