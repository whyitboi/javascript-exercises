const pascal = function (n) {
  let result = [];
  if (n <= 1) return [1];

  for (let i = 0; i < n; i++) {
    //const start = n - 1;
    result.push(i);
    result.push(i + result[i] + 1);
  }
  result[result.length - 1] = 0;
  console.log(result);

  return result; //.splice(0, 1);
};
console.log(pascal(2));

// Do not edit below this line
module.exports = pascal;
