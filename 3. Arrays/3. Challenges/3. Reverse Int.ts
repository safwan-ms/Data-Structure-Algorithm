// 1. Convert a number to a string
// 2. Convert String to array
// 3. Reverse the string
// 4. Convert array back to string
// 5. Convert string back to number
// 6. Return to a number

const reverseInt = (num: number) => {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed);
};
console.log(reverseInt(982));
