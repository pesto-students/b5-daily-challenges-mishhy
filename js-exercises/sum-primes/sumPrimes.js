const isNumber = number => {
  if (number === undefined
      || Number.isNaN(number)
      || !Number.isFinite(number)) {
    throw new TypeError(`Expected number but found ${typeof input}`);
  }
};

const getNextPrime = function* (primeUpto) {
  isNumber(primeUpto);
  let nextNumber = 2;
  while (nextNumber <= primeUpto) {
    if (isPrime(nextNumber)) {
      yield nextNumber;
    }
    nextNumber += 1;
  }
};

const isPrime = number => {
  if (number < 4) {
    return (number === 2 || number === 3);
  }

  const sqrt = Math.sqrt(number);

  // if sqaure root is an integer then it is not a prime number
  if (!sqrt % 1) {
    return false;
  }

  for (const nextNumber of getNextPrime(sqrt)) {
    if (number % nextNumber === 0) {
      return false;
    }
  }

  return true;
};

function sumPrimes(primeUpto) {
  return [...getNextPrime(primeUpto)]
    .reduce((sum, el) => sum + el, 0);
}

export {
  sumPrimes,
};
