import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const param = useParams();
  console.log(param.id);
  return (
    <>
      <h1>Product</h1>
    </>
  );
}

export default Product;
