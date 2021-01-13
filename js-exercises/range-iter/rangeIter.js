function checkNaNThrow(num) {
  if (num === undefined || Number.isNaN(num)) {
    throw new TypeError(`${num} is not a number`);
  }
}

function rangeIter(lb, ub, step = 1) {
  checkNaNThrow(lb);
  checkNaNThrow(ub);
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
