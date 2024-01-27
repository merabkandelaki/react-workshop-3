import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  products: [],
  cart: [],
  totalAmount: 0,
  totalPages: 0,
  currentPage: 1,
};

const getProductsAmount = (state) => {
  const totalAmount = state.cart.reduce((total, current) => {
    return total + current.amount;
  }, 0);
  return {
    ...state,
    totalAmount,
  };
};

const ProductContext = createContext();

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        totalPages: Math.ceil(action.payload.total / action.payload.limit),
      };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: action.payload };
    case "GET_TOTAL_AMOUNT":
      return getProductsAmount(state, action.payload);
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
