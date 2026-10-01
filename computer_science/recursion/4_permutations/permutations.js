const permutations = function (someArray) {
  if (someArray.length <= 1) return [someArray];

  //return final array of permutation arrays
  return someArray.flatMap((item) => {
    const rest = someArray.filter((other) => {
      //return the values that are not the item
      return item !== other;
    });
    //recursive pattern
    const perm = permutations(rest);

    //return the array of item and its permutations
    return perm.map((p) => [item, ...p]);
  });
};

// Do not edit below this line
module.exports = permutations;
