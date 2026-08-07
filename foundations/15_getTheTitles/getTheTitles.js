const getTheTitles = function (books) {
  let bookTitles = [];
  let titles = books.map((item) => {
    bookTitles.push(item.title);
  });
  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
