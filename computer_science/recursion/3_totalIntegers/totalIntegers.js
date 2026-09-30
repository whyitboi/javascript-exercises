const totalIntegers = function (someArray) {
  let counter = 0;
  for (const item of someArray) {
    if (Number.isInteger(item)) counter++;
  }
  return counter;
};

// Do not edit below this line
module.exports = totalIntegers;
