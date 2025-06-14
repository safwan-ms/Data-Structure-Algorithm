//  1. Convert a string into an array
//  2. Reverse the array
//  3. Convert array back to string
//  4. Compare string

const palindrome = (str: string) => str.split("").reverse().join("") === str;

console.log(palindrome("cddc"));
console.log(palindrome("safwax"));
