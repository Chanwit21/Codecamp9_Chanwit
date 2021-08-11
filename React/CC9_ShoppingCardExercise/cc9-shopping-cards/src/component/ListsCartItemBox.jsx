import React from "react";
import ListCartItem from "./ListCartItem.jsx";
import "./ListsCartItemBox.css";

function ListsCartItemBox(props) {
  const { cartLists, increaseQuantityProduct, decreaseQuantityProduct } = props;

  const listsCartItem = cartLists.map(
    (
      cartlist // ใส่แบบนี้ได้เลย () คือรวม Return ไว้หลัง arrow แล้ว
    ) => (
      <ListCartItem
        key={cartlist.id}
        cartlist={cartlist}
        increaseQuantityProduct={increaseQuantityProduct}
        decreaseQuantityProduct={decreaseQuantityProduct}
      />
    )
  );
  return (
    <div className="ListsCartItemBox">
      {listsCartItem}
      {/* <ListCartItem /> */}
    </div>
  );
}

export default ListsCartItemBox;
