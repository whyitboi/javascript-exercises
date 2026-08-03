const repeatString = function (str, num) {
  let copiedStr = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      copiedStr += str;
    }
  }
  return copiedStr;
};

// Do not edit below this line
module.exports = repeatString;
