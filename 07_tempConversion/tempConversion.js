const convertToCelsius = function(temperature) {
  let conversion = (temperature - 32) * 5/9;
  if(conversion % 1 !== 0)return parseFloat(conversion.toFixed(1));
  else return conversion
};

const convertToFahrenheit = function(temperature) {
  let conversion = temperature * 9/5 + 32;
  if(conversion % 1 !== 0)return parseFloat(conversion.toFixed(1));
  else return conversion
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
