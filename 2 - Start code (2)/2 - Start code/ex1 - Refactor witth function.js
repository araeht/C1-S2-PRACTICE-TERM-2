// THE CONTEXT
// In the provided code, there's an array named shoppingCart representing a user's shopping cart with items containing 'name', 'price', and 'quantity' properties.
// The current code calculates the total price of items in the shopping cart without using functions.

// THE PROBLEM
// - This code works only for this specific shopping cart. But we want to be able to compute the total price for any shopping cart

// YOUR JOB
// Your task is to refactor the code by extracting the logic for calculating the total price into a reusable function.
// Write a function named calculateTotalPrice that takes the shoppingCart array as a parameter and returns the total price.

// TO CHECK
// Check that your code still produce the same result
// Check that your code can work with myny shopping carts

let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];
function calculateTotalPrice(shoppingCart){
    let totalPrice=0;
    shoppingCart.forEach((item)=>{
        totalPrice += item.price * item.quantity;
    });
    return totalPrice;
}
let shoppingCart2 = [
  { name: "Mangoes", price: 4, quantity: 2 },
  { name: "Pineapples", price: 5, quantity: 1 }
];


let totalPrice= calculateTotalPrice(shoppingCart);
let totalPrice2= calculateTotalPrice(shoppingCart2);
// Calculate total price without using functions
// let totalPrice = 0;
// for (let item of shoppingCart) {
//   totalPrice += item.price * item.quantity;
// }
console.log("Total price:", totalPrice);
console.log("Cart 2 Total:", totalPrice2);