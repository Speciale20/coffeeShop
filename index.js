// 1. Clean the coffee_data.js file.

// All prices should be numbers.
// All items should be strings.
// Objects and properties should have commas separating them.
// Connect the coffee_data.js file to the index.js file.
// 2. Print an array of all the drinks on the menu.

// 3. Print an array of drinks that cost 5 and under.

// 4. Print an array of drinks that are priced at an even number.

// 5. Print the total if you were to order one of every drink.

// 6. Print an array with all the drinks that are seasonal.

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name.For example: "affogato with imported beans".


const coffeeData = require("./coffee_data.js")


const drinks = coffeeData.map((drinkObjects) => drinkObjects.name);



const under5DollarDrinks = coffeeData.filter((drinkObjects) => drinkObjects.price <= 5);


const evenPriceDrinks = coffeeData.filter((drinkObject) => drinkObject.price % 2 === 0);


const totalCost = coffeeData.reduce((total, drinkObject) => (total += drinkObject.price),
  0);

const seasonalDrinks = coffeeData.filter((drinkObject) => drinkObject.seasonal === true);


const drinksImported = coffeeData
  .filter((drinkObject) => drinkObject.seasonal)
  .map((drinkObject) => {
    return drinkObject.name + "with imported beans";
  })
console.log(drinksImported)
