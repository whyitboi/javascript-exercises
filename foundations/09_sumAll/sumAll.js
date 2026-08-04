const sumAll = function (numOne, numTwo) {
  if (
    Number.isInteger(numOne) === false ||
    Number.isInteger(numTwo) === false
  ) {
    return "ERROR";
  } else if (numOne < 0 || numTwo < 0) {
    return "ERROR";
  } else {
    let sum = 0;
    let numCopy;
    if (numOne > numTwo) {
      numCopy = numTwo;
      numTwo = numOne;
      numOne = numCopy;
    }
    for (let i = numOne; i <= numTwo; i++) {
      sum += i;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
