const findTheOldest = function (people) {
  let oldestPerson = people.sort((a, b) => {
    let aAge,
      bAge = 0;

    if (a.yearOfDeath === undefined || b.yearOfDeath === undefined) {
      aAge = new Date().getFullYear() - a.yearOfBirth;
      bAge = new Date().getFullYear() - b.yearOfBirth;
    } else {
      aAge = a.yearOfDeath - a.yearOfBirth;
      bAge = b.yearOfDeath - b.yearOfBirth;
    }

    if (aAge > bAge) {
      return -1;
    } else return 1;
  });
  return oldestPerson[0];
};
// Do not edit below this line
module.exports = findTheOldest;
