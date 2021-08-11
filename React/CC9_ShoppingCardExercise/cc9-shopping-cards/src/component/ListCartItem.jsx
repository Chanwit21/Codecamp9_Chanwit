import React from "react";
import "./ListCartItem.css";
import { formatUSD } from "../service/formatPrice";

function ListCartItem(props) {
  const { cartlist, increaseQuantityProduct, decreaseQuantityProduct } = props;
  const { name, price, quantity, id } = cartlist;

  const handleClickIncrease = (id) => {
    increaseQuantityProduct(id);
  };

  const handleClickDecrease = (id) => {
    decreaseQuantityProduct(id);
  };

  return (
    <div className="ListCartItem">
      <span>{name}</span>
      <div className="sumprice-group">
        <div className="btn-group">
          <button
            className="btn btn-increase"
            onClick={() => handleClickIncrease(id)}>
            +
          </button>
          <button
            className="btn btn-decrease"
            onClick={() => handleClickDecrease(id)}>
            -
          </button>
          <span>{quantity}</span>
          <span>x</span>
        </div>
        <div className="row-rigth">
          <span>{formatUSD(price)}</span>
        </div>
      </div>
    </div>
  );
}

export default ListCartItem;
