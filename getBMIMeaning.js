const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/height**2
}
function getBMIMeaning(weight, height) {
  return calculateBMI(weight, height) < 18.5 ? 'Underweight' : calculateBMI(weight, height) >= 18.5 && calculateBMI(weight, height) <= 24.9 ? 'Normal weight' : 'Overweight'
}
module.exports = getBMIMeaning
