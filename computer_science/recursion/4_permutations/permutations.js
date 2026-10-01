const permutations = function (someArray) {
  someArray = [1, 2, 3];
  if (someArray.length <= 1) return [someArray];

  const perm = someArray.flatMap((item) => {
    const rest = someArray.filter((other) => {
      if (item !== other) return other; //console.log(other);
    });
    console.log(rest);
  });
};

// Do not edit below this line
module.exports = permutations;
