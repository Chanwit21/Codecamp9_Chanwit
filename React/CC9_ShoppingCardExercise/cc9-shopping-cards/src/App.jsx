import React, { useState } from "react";
import "./App.css";
import CartItemsContainer from "./component/CartItemsContainer";
import Header from "./component/Header.jsx";
import ProductContainer from "./component/ProductContainer.jsx";
import { SHOPPING_LISTS, CARTLISTS } from "./mocks/data";

function App() {
  // const [shoppingLists, setShoppingLists] = useState(SHOPPING_LISTS);
  const [cartLists, setCartLists] = useState(CARTLISTS);

  const addCart = (id) => {
    const productToAdd = [...SHOPPING_LISTS][
      SHOPPING_LISTS.findIndex((item) => item.id === id)
    ];
    productToAdd.quantity = 1;
    const newCartLists = [productToAdd, ...cartLists];
    setCartLists(newCartLists);
  };

  const increaseQuantityProduct = (id) => {
    const newCartList = [...cartLists];
    const idx = newCartList.findIndex((item) => item.id === id);
    newCartList[idx].quantity += 1;
    setCartLists(newCartList);
  };

  const decreaseQuantityProduct = (id) => {
    const newCartList = [...cartLists];
    const idx = newCartList.findIndex((item) => item.id === id);
    if (newCartList[idx].quantity > 1) {
      newCartList[idx].quantity -= 1;
    } else {
      newCartList.splice(idx, 1);
    }
    setCartLists(newCartList);
  };

  const countCart = ((cartLists) => {
    return cartLists.length;
  })(cartLists);

  return (
    <div className="App">
      <Header countCart={countCart} />
      <section className="shopping-product">
        <ProductContainer shoppingLists={SHOPPING_LISTS} addCart={addCart} />
        <CartItemsContainer
          cartLists={cartLists}
          increaseQuantityProduct={increaseQuantityProduct}
          decreaseQuantityProduct={decreaseQuantityProduct}
        />
      </section>
    </div>
  );
}

export default App;
