import React from "react";
import "./ListCartItem.css";
import { formatUSD } from "../service/formatPrice";
import { BsFillTrashFill } from "react-icons/bs";

function ListCartItem(props) {
  const {
    cartlist,
    increaseQuantityProduct,
    decreaseQuantityProduct,
    deleteCartItem,
  } = props;
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
        <div>
          <button
            style={{ background: "inherit", border: "none" }}
            onClick={() => deleteCartItem(id)}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListCartItem;
