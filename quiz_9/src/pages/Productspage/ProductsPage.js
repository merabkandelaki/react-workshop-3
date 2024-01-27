import React from "react";
import ProductList from "../../components/Productlist/ProductList";
import HeadingImage from "../../assets/image_heading.png";
import "../Productspage/ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <img src={HeadingImage} alt="heading" />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
