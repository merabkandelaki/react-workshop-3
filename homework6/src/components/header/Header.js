import React from "react";
import { FaUniversity } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../header/Header.css";

const Header = () => {
  const headerLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "white",
    };
  };
  return (
    <div className="header">
      <div className="left-side">
        <FaUniversity />
        <span>UNIVERSITIES</span>
      </div>
      <div className="right-side">
        <NavLink style={headerLinkStyle} to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
