const isNumber = number => {
  if (number === undefined
    || Number.isNaN(number)
    || !Number.isFinite(number)) {
    throw new TypeError(`Expected number but found ${typeof input}`);
  }
};

// simpler code
function* rangeIter(lb, ub, step = 1) {
  isNumber(lb);
  isNumber(ub);
  let el = lb;
  while (el <= ub) {
    yield el;
    el += step;
  }
}
// as per class
// function rangeIter(from, to, step = 1) {
//   isNumber(from);
//   isNumber(to);
//   const iterable = {
//     [Symbol.iterator]() {
//       let i = from - step;
//       return {
//         next() {
//           i += step;
//           return {
//             done: i > to,
//             value: i,
//           };
//         },
//       };
//     },
//   };
//   return [...iterable];
// }

export { rangeIter };
