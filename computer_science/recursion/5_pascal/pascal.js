const pascal = function (n) {
  let result = [1];
  if (n <= 1) return result;
  let arrayOne = result;
  let arrayTwo = result;
  arrayOne.unshift(0);
  arrayTwo.push(0);

  //   for (let i = 0; i < n; i++) {

  //     result.shift(0)
  //     result.push(i);
  //     result.push(i + result[i] + 1);
  //   }
  //   result[result.length - 1] = 0;
  console.log(arrayOne);
  console.log(arrayTwo);

  //return result; //.splice(0, 1);
};
console.log(pascal(2));

// Do not edit below this line
module.exports = pascal;
