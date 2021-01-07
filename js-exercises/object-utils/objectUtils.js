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

const map = (obj, callbackfn) => {
  checkObjCallback(obj, callbackfn);
  const result = {};
  for (const key of Object.keys(obj)) {
    const [newKey, newVal] = callbackfn([key, obj[key]]);
    result[newKey] = newVal;
  }
  return result;
};

const filter = (obj, callbackfn) => {
  checkObjCallback(obj, callbackfn);
  const result = {};
  for (const key of Object.keys(obj)) {
    if (callbackfn([key, obj[key]])) {
      result[key] = obj[key];
    }
  }
  return result;
};

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
