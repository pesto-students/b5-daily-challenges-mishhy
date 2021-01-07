import { isString } from 'util';

function abbreviateString(nameString) {
  if (isString(nameString)) {
    const words = nameString.split(' ');
    if (words.length > 1) {
      return `${words[0]} ${words[words.length - 1][0].toUpperCase()}.`;
    }
  }
  throw new Error('invalid parameter');
}

export { abbreviateString };
