// 1. Make the string to lowercase
// 2. Convert string to array
// 3. Capitalize each word
// 4. Convert array back to string

const capitalizedString = (sentence: string) => {
  const words = sentence.toLowerCase().split(" ");
  const capital = words.map((word) => word[0].toUpperCase() + word.slice(1));

  const result = capital.join(" ");
  return result;
};
console.log(capitalizedString("safwax webdev"));
