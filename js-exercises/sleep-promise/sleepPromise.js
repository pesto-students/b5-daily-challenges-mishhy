const sleep = ms => {
  if (ms < 0) {
    throw new RangeError(`${ms}ms!!! You are not in time machine, you can't go back :)`);
  }

  const promise = new Promise((resolve) => setTimeout(resolve, ms));

  // new function object
  const customPromise = val => promise.then(() => val);

  // define its own then and catch method
  // since normally it wouldn't passing chain sleeping
  customPromise.then = (...args) => promise.then(...args);
  customPromise.catch = Promise.resolve().catch;

  return customPromise;
};

export { sleep };
