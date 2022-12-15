/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
let totalPaid = 0;
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const product_1 = {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 601,
  image: "images/cherry.jpg",
};

const product_2 = {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 602,
  image: "images/strawberry.jpg",
};

const product_3 = {
  name: "Bag of Oranges",
  price: 10,
  quantity: 0,
  productId: 603,
  image: "images/orange.jpg",
};

const product_4 = {
  name: "Carton of Bananas",
  price: 7,
  quantity: 0,
  productId: 604,
  image: "images/bananas-r.jpg",
};

const product_5 = {
  name: "Carton of Ananas",
  price: 15,
  quantity: 0,
  productId: 605,
  image: "images/ananas-r.jpg",
};

const product_6 = {
  name: "Carton of Apples",
  price: 9,
  quantity: 0,
  productId: 606,
  image: "images/apple-r.jpg",
};

products.push(product_1);
products.push(product_2);
products.push(product_3);
products.push(product_4);
products.push(product_5);
products.push(product_6);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
   - bananas.jpg by Brett Jordan
   - ananas.jpg by Julien Pianetti
   - apple.jpg by Karla Hernandez
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
// console.log(cart);

/* Create a helper function to get product Id */
function getProductById(productId) {
  return products.find((product) => product.productId === productId);
}

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let product = getProductById(productId);
  if (product) {
    product["quantity"] += 1;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
  return cart;
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let product = getProductById(productId);
  if (product) {
    product["quantity"] += 1;
  }
  return cart;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let product = getProductById(productId);
  if (product) {
    product["quantity"] -= 1;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i]["quantity"] === 0) {
        cart[i]["quantity"] = 0;
        cart.splice(i, 1);
      }
    }
  }
  return cart;
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]["productId"] === productId) {
      cart[i]["quantity"] = 0;
      cart.splice(i, 1);
    }
    console.log(cart[i]);
  }
  return cart;
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let productSum = 0;
  cart.forEach(function (pduct) {
    productSum += pduct["price"] * pduct["quantity"];
  });
  return productSum;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  while (cart.length > 0) {
    cart.pop();
  }
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
  let bill = cartTotal();
  let balance;
  totalPaid += amount;
  if (totalPaid >= bill) {
    let change = totalPaid - bill;
    return change;
  } else if (totalPaid < bill) {
    balance = totalPaid - bill;
    return balance;
  }
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
