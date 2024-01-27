import React from "react";
import Logo from "../../assets/logo.svg";
import { BsCart3 } from "react-icons/bs";
import "../Header/Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";

const Header = () => {
  const navigate = useNavigate();
  const headerLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };
  const { user, logout } = useUserContext();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const { state } = useProductContext();

  return (
    <div className="header">
      <div className="left-side">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <span>SHOP</span>
      </div>
      <div className="right-side">
        <NavLink style={headerLinkStyle} to="/products">
          Products
        </NavLink>
        {!user && (
          <NavLink style={headerLinkStyle} to="/">
            SignIn
          </NavLink>
        )}
        {user && <span onClick={handleLogout}>Logout</span>}
        <NavLink style={headerLinkStyle} to="/cart">
          <BsCart3 className="cart-icon" />
        </NavLink>
        <span className="total-amount">{state.totalAmount}</span>
      </div>
    </div>
  );
};

export default Header;
