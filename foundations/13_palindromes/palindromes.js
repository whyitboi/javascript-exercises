const palindromes = function (string) {
  let stringFormat = string.replace(/[^A-Za-z0-9]/g, ""); //use regExp to remove non special characters
  let palCheck = "";

  //reverse the string. Cant use revers() because its an array method
  for (let i = stringFormat.length - 1; i >= 0; i--) {
    palCheck += `${stringFormat[i]}`;
  }
  if (stringFormat.toLowerCase() === palCheck.toLowerCase()) {
    //adjust case to make case insensitive
    return true;
  } else return false;
};

//

// Do not edit below this line
module.exports = palindromes;
