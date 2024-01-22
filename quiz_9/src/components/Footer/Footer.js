import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import Line from "../../assets/line.png";
import Paypal from "../../assets/paypal.svg";
import Visa from "../../assets/visa.svg";
import Maestro from "../../assets/maestro.svg";
import Discover from "../../assets/discover.svg";
import AmericanExpress from "../../assets/american-express.svg";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-sides">
        <div className="top-left-side">
          <h2>Sign Up To Our Newsletter</h2>
          <p>Be the first to hear about the latest offers</p>
        </div>
        <div className="top-right-side">
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="line">
        <img src={Line} alt="line" />
      </div>
      <div className="bottom-sides">
        <div className="social">
          <LiaFacebookSquare className="facebook" />
          <LiaTwitterSquare className="twitter" />
          <LiaInstagram className="instagram" />
        </div>
        <div className="payment">
          <img src={Paypal} alt="image1" />
          <img src={Visa} alt="image2" />
          <img src={Maestro} alt="image3" />
          <img src={Discover} alt="image4" />
          <img src={AmericanExpress} alt="image5" />
        </div>
        <div className="bottom-sides-right">
          <span>Copyryght &copy; 2024 Shop Kandelaki.Ltd</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
