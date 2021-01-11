const convertIntoPromise = promise => {
  if (promise instanceof Promise) {
    return promise;
  }
  return Promise.resolve(promise);
};

const allPromises = promises => {
  const resolveArray = [];
  let resultPromise = Promise.resolve();
  const resolveThen = val => {
    resolveArray.push(val);
    return resolveArray;
  };
  if (promises) {
    for (const promise of promises) {
      resultPromise = resultPromise
        .then((() => convertIntoPromise(promise).then(resolveThen)));
    }
  }
  return resultPromise;
};

export { allPromises };
