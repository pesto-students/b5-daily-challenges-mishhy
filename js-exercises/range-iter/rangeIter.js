const isNumber = number => !(number === undefined
    || Number.isNaN(number)
    || !Number.isFinite(number));

const throwError = num => `${num} is not a number`;

function rangeIter(lb, ub, step = 1) {
  if (!isNumber(lb)) {
    throw new TypeError(throwError(lb));
  }
  if (!isNumber(ub)) {
    throw new TypeError(throwError(ub));
  }
  const iterable = {};

  iterable[Symbol.iterator] = function* () {
    let el = lb;
    while (el <= ub) {
      yield el;
      el += step;
    }
  };
  return iterable;
}

export { rangeIter };
