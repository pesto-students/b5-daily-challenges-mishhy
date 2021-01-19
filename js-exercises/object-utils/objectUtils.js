function checkObjCallback(obj, callbackfn, callBackCheck = true) {
  if (callBackCheck) {
    if (
      typeof callbackfn !== 'function'
      && Object.prototype.toString.call(callbackfn) !== '[object Function]'
    ) {
      throw new TypeError(`Expect function: Got ${typeof callbackfn}`);
    }
  }
  if (obj === null || obj === undefined || Object.keys(obj).length === 0) {
    throw new TypeError(`Object is ${obj}`);
  }
}

function compose(...fns) {
  return (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);
}

const map = (obj, callbackfn) => compose(
  Object.entries,
  (array) => array.map(callbackfn),
  Object.fromEntries,
)(obj);

const filter = (obj, callbackfn) => compose(
  Object.entries,
  (array) => array.filter(callbackfn),
  Object.fromEntries,
)(obj);

const invert = (obj) => {
  checkObjCallback(obj, null, false);
  return map(obj, ([key, val]) => [val.toString(), key]);
};

const merge = (...objects) => {
  let result = {};
  for (const obj of objects) {
    checkObjCallback(obj, null, false);
    result = { ...result, ...obj };
  }
  return result;
};

const all = (obj, callbackfn) => {
  checkObjCallback(obj, callbackfn);
  const passedLength = Object.keys(filter(obj, callbackfn)).length;
  return passedLength === Object.keys(obj).length;
};

const some = (obj, callbackfn) => {
  checkObjCallback(obj, callbackfn);
  return Object.keys(filter(obj, callbackfn)).length > 0;
};

export {
  map, filter, invert, merge, all, some,
};
