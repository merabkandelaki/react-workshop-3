import React from "react";
import "../user/User.css";

const User = ({ data, filters }) => {
  return (
    <div className="user-item">
      <ul>
        {filters.firstname && (
          <li>
            Firstname: <span>{data?.name?.first}</span>
          </li>
        )}
        {filters.lastname && (
          <li>
            Lastname: <span>{data?.name?.last}</span>
          </li>
        )}
      </ul>
      <ul>
        {filters.city && (
          <li>
            City: <span>{data?.location?.city}</span>
          </li>
        )}
        {filters.country && (
          <li>
            Country: <span>{data?.location?.country}</span>
          </li>
        )}
      </ul>
      <ul>
        {filters.email && (
          <li>
            Email: <span>{data?.email}</span>
          </li>
        )}
        {filters.username && (
          <li>
            Username: <span>{data?.login?.username}</span>
          </li>
        )}
      </ul>
      <ul>
        {filters.birddate && (
          <li>
            Birddate: <span>{data?.dob?.date}</span>
          </li>
        )}
      </ul>
      <ul>
        {filters.phone && (
          <li>
            Phone: <span>{data?.phone}</span>
          </li>
        )}
      </ul>
      <div className="pictures">
        {filters.images && <h3>Images:</h3>}
        {filters.images && <img src={data?.picture?.large} alt="large" />}
        {filters.images && <img src={data?.picture?.medium} alt="medium" />}
        {filters.images && (
          <img src={data?.picture?.thumbnail} alt="thumbnail" />
        )}
      </div>
    </div>
  );
};

export default User;
