// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const formattedA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  const formattedB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  const mapA = {};
  const mapB = {};

  for (let char of formattedA) {
    if (!mapA[char]) {
      mapA[char] = 1;
    } else {
      mapA[char]++;
    }
  }

  for (let char of formattedB) {
    if (!mapB[char]) {
      mapB[char] = 1;
    } else {
      mapB[char]++;
    }
  }

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let propA in mapA) {
    if (mapB[propA] !== mapA[propA]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
