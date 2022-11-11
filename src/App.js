import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

// [['Chocolate Chip Cookies', 1], ['Matcha Mille Crepe Cake', 1]]
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Map())
  const [totalPrice, setTotalPrice] = useState(0)

  // method that adds an item to the cart
  const addToCart = (productName, productPrice) => {
    // {'Egg Custard Bun' => 1, 'Steamed Taro Buns' => 2}
    const newCart = new Map(cart)
  
    if (newCart.has(productName)) {
      var currCount = newCart.get(productName)
      newCart.set(productName, currCount + 1)
    } else {
      newCart.set(productName, 1)
    }
    setCart(newCart)
    console.log(newCart)

    // update total price
    var newPrice = totalPrice + productPrice
    setTotalPrice(newPrice)
    console.log(newPrice)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="container-div">
        <div class="bakery-item-div">
          <div className="bakery-items">
            {bakeryData.map((item, index) => ( // map bakeryData to BakeryItem components
              <BakeryItem item={item} addToCart={addToCart} /> 
            ))}
          </div>
        </div>

        <div class="cart-div">
          <h2>Cart</h2>
          {/* render a list of items in the cart */}
          {[...cart].map((item) => (
            <div>
              <p>Name: {item[0]}</p>
              <p>Count: {item[1]}</p>
            </div>
          ))}

          {/* display the total price of items in the cart */}
          <div>
            <p>Total Price: {totalPrice}</p>
          </div>
        </div> 
      </div>
      
    </div>
  );
}

export default App;
