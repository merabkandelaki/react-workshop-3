import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import appRoutes from "../../constants/routes";
import "./UniversityDetail.css";

const UniversityDetail = () => {
  const { name } = useParams();
  const [university, setUniversity] = useState(null);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?name=${name}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error fetching university details");
      })
      .then((data) => {
        setUniversity(data[0]);
        console.log(data, "data");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [name]);

  if (error) {
    // return (
    //   <div>
    //     <h1>Error happened</h1>
    //   </div>
    // );
    return <Navigate to={appRoutes.customError}>{error}</Navigate>;
  }

  return (
    <div className="university-detail">
      {isloading && <PacmanLoader color="rgba(255, 0, 0, 0.877)" size={50} />}
      <h1>{university?.name}</h1>
      <div className="detail-items">
        <p>Country: {university?.country}</p>
        <p>
          Website:{" "}
          {university?.web_pages?.map((page, index) => (
            <Link key={index} to={`${page}`} target="_blank">
              {page}
            </Link>
          ))}
        </p>
        <p>Domain: {university?.domains}</p>
      </div>
    </div>
  );
};

export default UniversityDetail;
