import React, { useState } from "react";
import "../login/Login.css";

const Login = ({ onSuccessLogin }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    const isValidUser =
      user.email === "digitalAcademy@gmail.com" &&
      user.password === "iLoveReact123";

    if (isValidUser) {
      onSuccessLogin();
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="signin">
      <h1>Log in and see information on the first five users</h1>
      <div className="inputs">
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          name="email"
          placeholder="Enter Email"
        />
        <input
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <button onClick={handleLogin} disabled={!user.email || !user.password}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
