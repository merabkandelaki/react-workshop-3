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
            (state.currentPage - 1) * 10
          }`
        );
        const formattedArr = response?.data?.products?.map((item) => {
          return {
            ...item,
            amount: 1,
          };
        });
        response.data.products = formattedArr;
        const total = 100;
        dispatch({
          type: "SET_PRODUCTS",
          payload: response.data,
          total,
          limit: 100,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [state.currentPage, dispatch]);

  const handlePageClick = (page) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: page });
  };

  const handleNextPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: (state.currentPage += 1) });
  };

  const handlePrevPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: (state.currentPage -= 1) });
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
      <div className="pagination">
        <button
          className="prev-page"
          onClick={handlePrevPage}
          disabled={state.currentPage === 1}
        >
          Previous Page
        </button>
        <div className="page-numbers">
          {Array.from(
            { length: state.totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              style={{
                marginRight: "5px",
                color: page === state.currentPage ? "red" : "black",
              }}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="next-page"
          onClick={handleNextPage}
          disabled={state.currentPage === state.products?.limit}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProductList;
