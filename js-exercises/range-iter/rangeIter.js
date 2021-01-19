const isNumber = number => {
  if (number === undefined
    || Number.isNaN(number)
    || !Number.isFinite(number)) {
    throw new TypeError(`${number} is not a number`);
  }
};

// simpler code
function* range(from, to, step = 1) {
  isNumber(from);
  isNumber(to);
  let el = from;
  while (el <= to) {
    yield el;
    el += step;
  }
}
function rangeIter(from, to, step = 1) {
  return [...range(from, to, step)];
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
