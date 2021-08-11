import React from "react";
import "./CartItemsContainer.css";
import ListsCartItemBox from "./ListsCartItemBox";
import SummarizeCartContainer from "./SummarizeCartContainer";

function CartItemsContainer(props) {
  const {
    cartLists,
    increaseQuantityProduct,
    decreaseQuantityProduct,
    deleteCartItem,
  } = props;

  return (
    <div className="CartItemsContainer">
      <h1>Card Items</h1>
      {cartLists.length === 0 && (
        <div className="cart-is-empty">Cart is Empty</div>
      )}
      {cartLists.length !== 0 && (
        <>
          <ListsCartItemBox
            cartLists={cartLists}
            increaseQuantityProduct={increaseQuantityProduct}
            decreaseQuantityProduct={decreaseQuantityProduct}
            deleteCartItem={deleteCartItem}
          />
          <hr />
          <SummarizeCartContainer cartLists={cartLists} />
        </>
      )}
    </div>
  );
}

export default CartItemsContainer;
