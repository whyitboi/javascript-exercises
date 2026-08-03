const removeFromArray = function (array, ...item) {
  let newArray = [];
  if (Array.isArray(item) === true) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < item.length; j++) {
        if (array[i] !== item[j]) {
          newArray.push(array[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== item) {
        //1 || array[i] !== item[i]) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
