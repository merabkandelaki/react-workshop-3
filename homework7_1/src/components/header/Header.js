import React from "react";
import { useNavigate } from "react-router-dom";
import { GiPostStamp } from "react-icons/gi";
import { useUserContext } from "../../context/UserContext";
import "../header/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useUserContext();
  const handleLogout = () => {
    logout();
    navigate("/");
    console.log(user);
  };
  return (
    <div className="header">
      <div className="header-left">
        <GiPostStamp className="logo" />
        <span>Posts Users</span>
      </div>
      <nav className="header-right">
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </span>
        {!user && (
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        )}
        {user && <span onClick={handleLogout}>Logout</span>}
      </nav>
    </div>
  );
};

export default Header;
