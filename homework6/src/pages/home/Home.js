import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/image.png";
import "../home/Home.css";

const Home = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (country.trim() !== "") {
      navigate(`/universities/${country}`);
    }
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="header-container">
        <h1>This is the universities page</h1>
        <p>Find information about universities in your desired country</p>
        <div className="search-country">
          <label>
            Enter Country:
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
