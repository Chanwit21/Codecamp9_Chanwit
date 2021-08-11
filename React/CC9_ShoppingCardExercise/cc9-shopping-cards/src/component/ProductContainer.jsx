import React from "react";
import ProductCard from "./ProductCard.jsx";
import "./ProductContainer.css";

function ProductContainer(props) {
  const { shoppingLists, addCart } = props;

  const listsProductCards = shoppingLists.map((item) => {
    return <ProductCard key={item.id} productList={item} addCart={addCart} />;
  });

  return (
    <div className="ProductContainer">
      <h1>Product</h1>
      <div className="list-product-container">{listsProductCards}</div>
      {/* <ProductCard /> */}
    </div>
  );
}

export default ProductContainer;
