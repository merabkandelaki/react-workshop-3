import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import "../universitylist/UniversityList.css";

const UniversityList = () => {
  const { country } = useParams();
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Fetch university country error");
      })
      .then((data) => {
        setUniversities(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [country]);

  if (error) {
    return (
      <div>
        <h1>Error happened</h1>
      </div>
    );
  }

  return (
    <div className="universities-list">
      {isloading && <PacmanLoader color="rgba(255, 0, 0, 0.877)" size={50} />}
      <h1>Universities in {country}</h1>
      <div className="list-items">
        <ul>
          {universities?.map((university, key) => (
            <li key={key}>
              {university?.name}
              <Link to={`/university/${university?.name}`}>
                <button>Detail page</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UniversityList;
