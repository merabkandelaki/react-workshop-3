import React from "react";
import { useProductContext } from "../../context/ProductContext";
import "../Cart/Cart.css";

const Cart = () => {
  const { state } = useProductContext();
  let grandTotal = 0;
  const calculateTotal = (product) => {
    const result = product.amount * product.price;
    grandTotal += result;
    return result;
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-box">
        {state.cart.map((product) => (
          <div className="cart-box-item" key={product?.id + Math.random()}>
            <img src={product?.thumbnail} alt="thumbnail" />
            <div className="cart-box-item-properties">
              <span>Product: {product?.title}</span>
              <span>Amount: {product.amount}</span>
              <span>Price: {product.price} $</span>
              <span>Total Price: {calculateTotal(product)} $</span>
            </div>
          </div>
        ))}
      </div>
      <h4 className="grand-total">Grand Total Price: {grandTotal} $</h4>
    </div>
  );
};

export default Cart;
