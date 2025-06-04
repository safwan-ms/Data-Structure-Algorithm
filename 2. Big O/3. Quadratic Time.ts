// -----------------------------------

// function findPairs(arr: number[]) {
//   // O(n^2)
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       console.log(`Pairs: ${arr[i]},${arr[j]}`);
//     }
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// findPairs(numbers);

// -----------------------------------

// ------------------------------------
// Drop Non-Dominants
function findPairs(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      console.log(`Pairs: ${arr[i]},${arr[j]}`);
    }
  }
  //O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("------------", q);
  }

  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our bigO
}
const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);
