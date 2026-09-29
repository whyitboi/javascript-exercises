const contains = function (object, value) {
  let result = false;
  if (object[value] === value) result = true;
  if (object[value] !== value) result = false;

  for (const child in object) {
    contains(child, child[value]);
  }
  return result;
};

// Do not edit below this line
module.exports = contains;
