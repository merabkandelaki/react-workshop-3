import React from "react";
import { useProductContext } from "../../context/ProductContext";
import "../Product/Product.css";
import { useUserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import appRoutes from "../../constants/routes";

const Product = ({ product }) => {
  const { dispatch, state } = useProductContext();
  const { isUserLoggedIn } = useUserContext();

  const handleAddToCart = () => {
    const payload = [...state.cart];
    const matchedProduct = payload.find(
      (item) => item?.title === product.title
    );

    matchedProduct ? (matchedProduct.amount += 1) : payload.push(product);
    dispatch({ type: "ADD_TO_CART", payload });
    dispatch({ type: "GET_TOTAL_AMOUNT", payload });
  };

  if (!isUserLoggedIn) {
    return <Navigate to={appRoutes.HOME_PAGE} />;
  }
  return (
    <div className="product-item">
      <div className="image">
        <img src={product?.thumbnail} alt="thumbnail" />
      </div>
      <div className="product-title-brand-stock-price">
        <div className="product-title-brand-stock">
          <span>{product?.title}</span>
          <span>{product?.brand}</span>
          <span>Stock: {product?.stock}</span>
        </div>
        <div className="product-price">
          <span>{product?.price} $</span>
        </div>
        <div className="add-cart">
          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
