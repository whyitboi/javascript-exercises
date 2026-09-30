const contains = function (object, value) {
  for (const item of Object.values(object)) {
    if (typeof item === "object" && item !== null) {
      if (contains(item, value)) return true; //result = true;
    }

    // Object.is(a,b) to catch NaN because NaN is not equal to itself
    if (Object.is(item, value)) return true; //result = true;
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
