const removeFromArray = function (array, ...item) {
  let newArray = [];
  let singleItem = 0;
  if (item.length < 2) {
    singleItem = item[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== singleItem) {
        newArray.push(array[i]); //removes single items
      }
    }
  } else if (item.length >= 2) {
    newArray = array.filter((element) => !item.includes(element)); //removes multiple items of different and same value
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;


