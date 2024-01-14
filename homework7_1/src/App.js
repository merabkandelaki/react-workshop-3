import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import './App.css'

const App = () => {
  return (
    <UserProvider>
      <PostProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </PostProvider>
    </UserProvider>
  );
};

export default App;
