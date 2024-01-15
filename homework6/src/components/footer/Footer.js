import React from "react";
import "../footer/Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <FaInstagramSquare />
        <FaSquareXTwitter />
        <FaSquareFacebook />
        <FaLinkedin />
      </div>
      <p>&copy; 2024 merabkandelaki.com</p>
    </div>
  );
};

export default Footer;
