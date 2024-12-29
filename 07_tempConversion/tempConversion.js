const convertToCelsius = function(fahrenDegree) {
  degreeConversion = (fahrenDegree -32) * (5/9)
  celsiusDegree = Math.round(degreeConversion * 10)/10
  return celsiusDegree;
};

const convertToFahrenheit = function(celsiusDegree) {
  degreeConversion = (celsiusDegree * 9/5 + 32)
  fahrenDegree = Math.round(degreeConversion * 10)/10
  return fahrenDegree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
