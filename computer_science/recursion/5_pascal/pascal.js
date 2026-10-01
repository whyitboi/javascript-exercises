const pascal = function (n) {
  if (n <= 1) return [1];
  const prev = pascal(n - 1);
  const arrayOne = [0, ...prev];
  const arrayTwo = [...prev, 0];

  return arrayOne.map((value, index) => {
    return value + arrayTwo[index];
  });
};
// Do not edit below this line
module.exports = pascal;
