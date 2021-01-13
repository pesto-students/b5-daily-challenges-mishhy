const isNumber = number => !(number === undefined
  || Number.isNaN(number)
  || !Number.isFinite(number)
  || number % 1
  || number < 2);

const isPrime = number => {
  if (!isNumber(number)) {
    return false;
  }

  if (number % 2 === 0) {
    return (number === 2);
  }

  const sqrt = Math.sqrt(number);
  // if sqaure root is an integer then it is not a prime number
  if (parseInt(sqrt, 10) === sqrt) {
    return false;
  }

  for (let i = 3; i <= parseInt(sqrt, 10); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getNextPrime = function* () {
  let nextNumber = 2;
  while (true) {
    if (isPrime(nextNumber)) {
      yield nextNumber;
    }
    nextNumber += 1;
  }
};

function sumPrimes(primeUpto) {
  if (!isNumber(primeUpto)) {
    throw new TypeError(`${primeUpto} is not an number`);
  }
  const prime = getNextPrime();
  let nextPrime = prime.next().value;
  let sumPrime = 0;
  while (nextPrime <= primeUpto) {
    sumPrime += nextPrime;
    nextPrime = prime.next().value;
  }
  return sumPrime;
}

export {
  sumPrimes,
};
