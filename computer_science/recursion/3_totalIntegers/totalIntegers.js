const totalIntegers = function (someArray) {
  let counter = 0;
  for (const item of someArray) {
    if (typeof item === "array" && item !== null)
      if (totalIntegers(item)) counter++;
    if (Number.isInteger(item)) counter++;
  }

  return counter;
};

// Do not edit below this line
module.exports = totalIntegers;
