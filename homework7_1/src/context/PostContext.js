import React, { createContext, useContext, useReducer } from "react";

const PostContext = createContext();

const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
