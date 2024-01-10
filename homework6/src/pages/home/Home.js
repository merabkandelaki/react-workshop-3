import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/image.png";
import "../home/Home.css";
import { countryList } from "../../api/countryList";

const Home = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/universities/${country}`);
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="header-container">
        <h1>This is the universities page</h1>
        <p>Find information about universities in your desired country</p>
        <div className="choose-country">
          <select onChange={(e) => setCountry(e.target.value)}>
            <option value="">--choose an country--</option>
            {countryList.map((country, key) => (
              <option key={key} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
