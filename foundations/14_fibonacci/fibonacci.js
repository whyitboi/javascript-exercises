const fibonacci = function fibonacci(value) {
  let num = 0;
  let fibArray = [1, 1]; //intializing this is important
  if (typeof value !== "number") {
    num = Number(value);
  } else num = value;

  if (num < 0) {
    return "OOPS";
  } else {
    if (num > 1) {
      for (let i = 2; i <= num; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
      }
    }
    if (num === 0) {
      return 0;
    } else {
      return fibArray[num - 1];
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;
