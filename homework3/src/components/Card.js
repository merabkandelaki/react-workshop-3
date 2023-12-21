import React from "react";

const Card = ({ product }) => {
  return (
    <div className="shopping-item">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.alt} />
      <div className="description">
        <span>{product.stock}</span>
        <span>{product.points}</span>
      </div>
      <div className="badges">
        <span className="badge-1">{product.badge1}</span>
        <span className="badge-2">{product.badge2}</span>
      </div>
      <button>{product.addcart}</button>
    </div>
  );
};

export default Card;
