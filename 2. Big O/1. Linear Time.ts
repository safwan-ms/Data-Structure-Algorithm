// ----------------------------------------

// const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

// const searchItem = (item: string) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log(`Found ${item}`);
//     }
//   }
// };

// searchItem("eggs");

// ------------------------------

const groceries = ["milk", "bread", "eggs", "flour", "choose", "sugar"];

const searchItem = (item: string) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
    }
  }
  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found ${item} 2`);
    }
  }

  // n + n = 2n -> O(2n)
  // Drop the constant so it becomes O(n)
};

searchItem("eggs");
