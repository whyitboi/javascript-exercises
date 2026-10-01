const pascal = function (n) {
  if (n <= 1) return [1];
  const prev = pascal(n - 1);

  const arrayOne = [0, ...prev];
  const arrayTwo = [...prev, 0];
  arrayOne.map((value, index) => {
    return value + arrayTwo[index];
  });

  console.log(arrayOne);
  console.log(arrayTwo);

  //return result; //.splice(0, 1);
};
console.log(pascal(3));

// Do not edit below this line
module.exports = pascal;
