import React from "react";
import "./CartItemsContainer.css";
import ListsCartItemBox from "./ListsCartItemBox";
import SummarizeCartContainer from "./SummarizeCartContainer";

function CartItemsContainer(props) {
  const { cartLists, increaseQuantityProduct, decreaseQuantityProduct } = props;

  return (
    <div className="CartItemsContainer">
      <h1>Card Items</h1>
      <ListsCartItemBox
        cartLists={cartLists}
        increaseQuantityProduct={increaseQuantityProduct}
        decreaseQuantityProduct={decreaseQuantityProduct}
      />
      <hr />
      <SummarizeCartContainer cartLists={cartLists} />
    </div>
  );
}

export default CartItemsContainer;
