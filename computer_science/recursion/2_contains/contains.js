const contains = function (object, value) {
  // let result;
  if (Object.values(object) === undefined || Object.values(object) === null)
    return;

  for (const item of Object.values(object)) {
    // if (Object.entries(object).length > 0)

    if (typeof item !== "object") {
      if (item === value) console.log("found: " + item + " " + value);
    } else {
      contains(item, value);
    }
    // if (item == value) return false;
    // contains(item, value);
  }
  return;
};

// Do not edit below this line
module.exports = contains;
