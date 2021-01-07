const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  const outObject = Array.isArray(objToCopy) ? [] : {};

  for (const key in objToCopy) {
    if ({}.hasOwnProperty.call(objToCopy, key)) {
      const value = objToCopy[key];

      // Recursively deepcopy for nested objects, including arrays
      outObject[key] = deepCopyObject(value);
    }
  }

  return outObject;
};

export { deepCopyObject };
