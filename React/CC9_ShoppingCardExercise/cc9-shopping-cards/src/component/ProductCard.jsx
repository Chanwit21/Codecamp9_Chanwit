import React from "react";
import "./ProductCard.css";
import { formatUSD } from "../service/formatPrice";

function ProductCard(props) {
  const { productList, addCart } = props;

  return (
    <div className="ProductCard">
      <div className="card-content">
        <img src={productList.image} alt="phopts" />
        <h1>{productList.name}</h1>
        <p>{formatUSD(productList.price)}</p>
        <button onClick={() => addCart(productList)}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
