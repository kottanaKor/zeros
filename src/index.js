module.exports = function getZerosCount(number) {
  // your implementation
  let zeros = 0;
  let sum = number;
  let divider = 5;
  while (sum >= 5) {
    sum = Math.floor(number / divider);
    divider *= 5;
    zeros += sum;
  }
  return zeros;
}
