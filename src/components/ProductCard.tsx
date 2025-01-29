import React from "react";
import "./ProductCard.scss"

interface ProductCardDetails {
  title: String;
  price: string;
  stock: string;
  img: string;
}

const ProductCard = (props: ProductCardDetails) => {
  const { title, price, stock, img } = props;
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={img} alt="bike photo" />
      </div>
      <div className="product-card-heading">
        <div className="product-card-heading-title">{title}</div>
        <div className="product-card-heading-price">{price}</div>
      </div>
      <div className="product-card-sub">Stock: {stock}</div>
    </div>
  );
};

export default ProductCard;
