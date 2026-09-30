const contains = function (object, value) {
  let result;

  for (const item of Object.values(object)) {
    if (typeof item === "object" && item !== null) {
      contains(item, value);
    }
    if (item === value) result = true;
  }
  return result;
};

// Do not edit below this line
module.exports = contains;
