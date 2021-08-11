import React from "react";
import "./SummarizeCartContainer.css";
import { formatUSD } from "../service/formatPrice";

function SummarizeCartContainer(props) {
  const { cartLists } = props;

  const itemPrice = cartLists.reduce(
    (accumulator, currentvalue) =>
      accumulator + currentvalue.price * currentvalue.quantity,
    0
  );

  const tax = itemPrice * 0.07;

  const shipping = itemPrice === 0 ? 0 : itemPrice > 3000 ? 0 : 50;

  const totalPrice = itemPrice + tax + shipping;

  return (
    <div className="SummarizeCartContainer">
      <div className="row">
        <p>Items Price</p>
        <p>{formatUSD(itemPrice)}</p>
      </div>
      <div className="row">
        <p>Tax</p>
        <p>{formatUSD(tax)}</p>
      </div>
      <div className="row">
        <p>Shipping</p>
        <p>{formatUSD(shipping)}</p>
      </div>
      <div className="row">
        <p>
          <b>Total</b>
        </p>
        <p>{formatUSD(totalPrice)}</p>
      </div>
    </div>
  );
}

export default SummarizeCartContainer;
