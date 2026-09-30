const contains = function (object, value) {
  let result = false;

  for (const item of Object.values(object)) {
    if (typeof item === "object" && item !== null) {
      if (contains(item, value)) return true; //result = true;
    }
    if (item === value) return true; //result = true;
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
