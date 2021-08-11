import React from "react";
import "./SummarizeCartContainer.css";
import { formatUSD } from "../service/formatPrice";

function SummarizeCartContainer(props) {
  const { cartLists } = props;

  const itemPrice = ((cartLists) => {
    let result = 0;
    for (let { quantity, price } of cartLists) {
      result += quantity * price;
    }
    return result;
  })(cartLists);

  const tax = itemPrice * 0.07;

  const totalPrice = itemPrice + tax;

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
        <p>{formatUSD(0)}</p>
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
