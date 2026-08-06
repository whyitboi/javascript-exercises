const palindromes = function (string) {
  let palCheck = string.split(" ").reverse().join();
  if (string === palCheck) return true;
};

// Do not edit below this line
module.exports = palindromes;
