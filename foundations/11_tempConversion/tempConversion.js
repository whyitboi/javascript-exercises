const convertToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  celsius = Number(Math.round(celsius + "e1") + "e-1"); // this rounds to specified decimal places. 'e1' for 1 decimal place
  return celsius;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  fahrenheit = Number(Math.round(fahrenheit + "e1") + "e-1"); // this rounds to specified decimal places. 'e1' for 1 decimal place
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
