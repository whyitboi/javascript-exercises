const pascal = function (n) {
  const prev = pascal(n - 1);
  if (n <= 1) return [1];
  let arrayOne = [0, ...prev];
  let arrayTwo = [...prev, 0];

  console.log(arrayOne);
  console.log(arrayTwo);

  //return result; //.splice(0, 1);
};
console.log(pascal(2));

// Do not edit below this line
module.exports = pascal;
