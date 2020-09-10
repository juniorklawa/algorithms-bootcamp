// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
// function steps(n) {
//   let a = "";

//   for (let i = 0; i < n; i++) {
//     a += " ";
//   }

//   const formattedA = a.split("");

//   for (let i = 0; i < n; i++) {
//     formattedA[i] = "#";
//     console.log(formattedA.join(""));
//   }
// }

// Solution 2
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let stair = ''
//     for (let j = 0; j< n; j++){
//       if(j<=i){
//         stair+= '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair)
//   }
// }

function step(n, row = 0, stair = '') {
    if (n === row) {
      return;
    }
  
    if (n === stair.length) {
      console.log(stair)
      return step(n, row + 1);
    }
  
    if (stair.length <= row) {
      stair += '#';
    } else {
      stair += ' ';
    }
    step(n, row, stair)
  }

module.exports = steps;
