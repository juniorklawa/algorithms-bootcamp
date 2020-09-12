// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'




// Attempt
//function constroiPiramide(hashtagsList) {
//   const lastRow = hashtagsList[hashtagsList.length - 1]
//   let str = ''
//   for (let i = 0; i < lastRow; i++) {
//     str += ' '
//   }
//   let strArr = str.split('')

//   for(let i = 0; i < hashtagsList.length; i++){
//     const tamanhoAtual = hashtagsList[i]
//     for (let j = 0; j < tamanhoAtual; j++){
//       strArr[j] = '#'
//     }
//     console.log(strArr)
//   }

// }

// function pyramid(n) {
//   let atualHashtags = 1
//   let hashtagsList = [1]
//   for (let i = 0; i < n; i++) {
//     if (i !== 0) {
//       atualHashtags = atualHashtags + 2
//       hashtagsList.push(atualHashtags)
//     }
//   }
//   constroiPiramide(hashtagsList)
// }



function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
