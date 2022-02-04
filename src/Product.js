import React from "react";
import "./product.css";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Alchemist</p>
        <p className="product__price">
          <small>&#8377;</small>
          <strong>199</strong>
        </p>
        <div className="product__rating">
          <p>star</p>
          <p>star</p>
          <p>star</p>
          <p>star</p>
          <p>star</p>
        </div>
        <img src="" alt="product image" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
