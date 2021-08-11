import React from "react";
import "./Header.css";

function Header(props) {
  const { countCart } = props;
  return (
    <>
      <div className="Header">
        <h1>CC9 Shop</h1>
        <div className="count-cart">
          <p>Cart</p>
          <p className="count">{countCart}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
