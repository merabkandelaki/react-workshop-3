import React, { useState } from "react";
import SignInImage from "../../assets/sign_in.png";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import AppleIcon from "../../assets/apple.svg";
import "../SignIn/SignIn.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const SignIn = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "random@gmail.com" && password === "random123") {
      login({ email, password });
      navigate("/products");
    } else {
      alert("Wrong credentials!!!");
    }
  };

  return (
    <div className="signin">
      <div className="signin-box">
        <div className="box-image">
          <img src={SignInImage} alt="img" />
        </div>
        <div className="box-right">
          <div className="box-right-firs-section">
            <h3>Hello !</h3>
          </div>
          <div className="box-right-second-section">
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="box-right-third-section">
            <button className="sign-in" onClick={handleLogin}>
              Sign in
            </button>
          </div>
          <div className="box-right-fourth-section">
            <img src={GoogleIcon} alt="img" />
            <img src={FacebookIcon} alt="img" />
            <img src={AppleIcon} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
