// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
// function formatStr(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }

// function mapStr(str) {
//   const map = {};

//   for (let char of str) {
//     if (!map[char]) {
//       map[char] = 1;
//     } else {
//       map[char]++;
//     }
//   }

//   return map;
// }

// function anagrams(stringA, stringB) {
//   const formattedA = formatStr(stringA);
//   const formattedB = formatStr(stringB);

//   const mapA = mapStr(formattedA);
//   const mapB = mapStr(formattedB);

//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }

//   for (let propA in mapA) {
//     if (mapB[propA] !== mapA[propA]) {
//       return false;
//     }
//   }

//   return true;
// }

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
