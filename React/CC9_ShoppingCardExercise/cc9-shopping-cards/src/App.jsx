import React, { useState } from "react";
import "./App.css";
import CartItemsContainer from "./component/CartItemsContainer";
import Header from "./component/Header.jsx";
import ProductContainer from "./component/ProductContainer.jsx";
import { SHOPPING_LISTS, CARTLISTS } from "./mocks/data";

function App() {
  // const [shoppingLists, setShoppingLists] = useState(SHOPPING_LISTS);
  const [cartLists, setCartLists] = useState(CARTLISTS);

  const addCart = (productList) => {
    const clone = { ...productList };
    const productToAdd = {
      id: clone.id,
      name: clone.name,
      price: clone.price,
    };
    // ใช้หาว่ามีอยู่ใน CartList หรือยัง
    const idx = cartLists.findIndex((item) => item.id === clone.id);
    if (idx === -1) {
      productToAdd.quantity = 1;
      const newCartLists = [productToAdd, ...cartLists];
      setCartLists(newCartLists);
    } else {
      const newCartLists = [...cartLists];
      newCartLists[idx].quantity += 1;
      setCartLists(newCartLists);
    }
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

  const deleteCartItem = (id) => {
    // console.log(id);
    const newCartList = cartLists.filter((item) => item.id !== id);
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
          deleteCartItem={deleteCartItem}
        />
      </section>
    </div>
  );
}

export default App;
