const fibonacci = function fibonacci(value) {
  let num = 0;
  if (typeof value !== "number") {
    num = Number(value);
  } else num = value;
  num += 1;
  if (num < 0) {
    return "OOPS";
  } else {
    if (num === 1) {
      return 0;
    }
    if (num === 2) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
