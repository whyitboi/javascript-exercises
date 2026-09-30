const totalIntegers = function (someArrayOrObject) {
  let counter = 0;
  if (typeof someArrayOrObject !== "object") return undefined;
  //Object.values(someArrayOrObjects) returns an array of the values, making it iteratable
  for (const item of Object.values(someArrayOrObject)) {
    if (typeof item === "object" && item !== null)
      counter += totalIntegers(item);
    if (Number.isInteger(item)) counter++;
  }

  return counter;
};

// Do not edit below this line
module.exports = totalIntegers;
