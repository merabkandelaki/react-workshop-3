import React from "react";
import "../card/Card.css";

const Card = ({ user }) => {
  return (
    <div className="user-item">
      <ul>
        <li>
          Gender: <span>{user.gender}</span>
        </li>
        <li>
          Title: <span>{user.name.title}</span>
        </li>
        <li>
          Firstname: <span>{user.name.first}</span>
        </li>
        <li>
          Lastname: <span>{user.name.last}</span>
        </li>
      </ul>
      <ul>
        <li>
          Street:{" "}
          <span>
            {user.location.street.name} {user.location.street.number}
          </span>
        </li>
        <li>
          City: <span>{user.location.city}</span>
        </li>
        <li>
          State: <span>{user.location.state}</span>
        </li>
        <li>
          Country: <span>{user.location.country}</span>
        </li>
        <li>
          Postcode: <span>{user.location.postcode}</span>
        </li>
        <li>
          Coordinates:{" "}
          <span>
            {user.location.coordinates.latitude},
            {user.location.coordinates.longitude}
          </span>
        </li>
        <li>
          Timezone:{" "}
          <span>
            {user.location.timezone.offset},{user.location.timezone.description}
          </span>
        </li>
      </ul>
      <ul>
        <li>
          Email: <span>{user.email}</span>
        </li>
        <li>
          Uuid: <span>{user.login.uuid}</span>
        </li>
        <li>
          Username: <span>{user.login.username}</span>
        </li>
        <li>
          Password: <span>{user.login.password}</span>
        </li>
        <li>
          SALT: <span>{user.login.salt}</span>
        </li>
        <li>
          md5: <span>{user.login.md5}</span>
        </li>
        <li>
          sha1: <span>{user.login.sha1}</span>
        </li>
        <li>
          sha256: <span>{user.login.sha256}</span>
        </li>
      </ul>
      <ul>
        <li>
          Birddate: <span>{user.dob.date}</span>
        </li>
        <li>
          Age: <span>{user.dob.age}</span>
        </li>
      </ul>
      <ul>
        <li>
          Registered date: <span>{user.registered.date}</span>
        </li>
        <li>
          Registered age: <span>{user.registered.age}</span>
        </li>
      </ul>
      <ul>
        <li>
          User phone: <span>{user.phone}</span>
        </li>
        <li>
          User cell: <span>{user.cell}</span>
        </li>
        <li>
          User id:{" "}
          <span>
            {user.id.name} {user.id.value}
          </span>
        </li>
      </ul>
      <div className="pictures">
        <h3>User images:</h3>
        <img src={user.picture.large} alt="large" />
        <img src={user.picture.medium} alt="medium" />
        <img src={user.picture.thumbnail} alt="thumbnail" />
      </div>
      <h3>
        Nat: <span>{user.nat}</span>
      </h3>
    </div>
  );
};

export default Card;
