// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const aux = n * 1;

  const formattedNumber = parseInt(aux.toString().split("").reverse().join(""));

  return n < 0 ? formattedNumber * -1 : formattedNumber;
}

module.exports = reverseInt;