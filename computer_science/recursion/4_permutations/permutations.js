const permutations = function (someArray) {
  if (someArray.length <= 1) return [someArray];

  someArray.flatMap((item) => {
    const rest = someArray.filter((other) => {
      return item !== other; //console.log(other);
    });
    permutations(rest);
  });
};
console.log(permutations([1, 2, 3]));

// Do not edit below this line
module.exports = permutations;
