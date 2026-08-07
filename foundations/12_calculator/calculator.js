const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};

const power = function (a, b) {
  let power = 1;
  for (let i = 0; i < b; i++) {
    power *= a;
  }
  return power;
};

const factorial = function (num) {
  let fact = 1;
  if (num === 0) {
    fact = 1;
  } else {
    for (let i = num; i > 0; i--) {
      fact *= i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
