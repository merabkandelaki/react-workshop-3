import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import "../login/Login.css";

const Login = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (name === "merabi" && email === "merabi123") {
      login({ name, email });
      navigate("/");
    } else {
      alert("Wrong credentials!!!");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
