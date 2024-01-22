import React, { useEffect } from "react";
import axios from "axios";
import { useProductContext } from "../../context/ProductContext";
import Product from "../Product/Product";
import "../Productlist/ProductList.css";

const ProductList = () => {
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=10&skip=${
            (state.page - 1) * 10
          }`
        );
        const formattedArr = response?.data?.products?.map((item) => {
          return {
            ...item,
            amount: 1,
          };
        });
        response.data.products = formattedArr;
        dispatch({ type: "SET_PRODUCTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [state.page, dispatch]);

  const handleNextPage = () => {
    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  };

  const handlePrevPage = () => {
    dispatch({ type: "SET_PAGE", payload: Math.max(state.page - 1, 1) });
  };

  return (
    <div className="products-list">
      <h1>
        <span>Shop</span> Our Latest Offers
      </h1>
      <div className="container">
        {state.products?.products?.map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrevPage} disabled={state.page === 1}>
          Previous Page
        </button>
        <span>Page {state.page}</span>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default ProductList;
