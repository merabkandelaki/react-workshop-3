import React, { useEffect, useState } from "react";
import User from "../../components/user/User";
import { PacmanLoader } from "react-spinners";
import { fetchUsers } from "../../api/index";
import "../users/Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);

  const [selectedFilters, setSelectedFilters] = useState({
    firstname: true,
    lastname: true,
    city: true,
    country: true,
    email: true,
    username: true,
    birddate: true,
    phone: true,
    images: true,
  });

  const handleFetch = () => {
    const perPage = users.length >= 5 ? 1 : 5;
    fetchUsers(perPage)
      .then((data) => {
        console.log(data);
        if (perPage === 1) {
          setUsers([...users, ...data.results]);
        } else {
          setUsers(data.results);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleCheckboxChange = (field) => {
    setSelectedFilters((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  if (error) {
    return (
      <div>
        <h1>Error happened</h1>
      </div>
    );
  }

  return (
    <>
      <div className="users">
        {isloading && <PacmanLoader color="rgba(255, 0, 0, 0.877)" size={50} />}
        <h1>Users page</h1>
        <div className="checkbox-users">
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.firstname}
              onChange={() => handleCheckboxChange("firstname")}
            />
            Show firstname
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.lastname}
              onChange={() => handleCheckboxChange("lastname")}
            />
            Show lastname
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.city}
              onChange={() => handleCheckboxChange("city")}
            />
            Show city
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.country}
              onChange={() => handleCheckboxChange("country")}
            />
            Show country
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.email}
              onChange={() => handleCheckboxChange("email")}
            />{" "}
            Show email
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.username}
              onChange={() => handleCheckboxChange("username")}
            />{" "}
            Show username
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.birddate}
              onChange={() => handleCheckboxChange("birddate")}
            />
            Show birddate
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.phone}
              onChange={() => handleCheckboxChange("phone")}
            />
            Show phone
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedFilters.images}
              onChange={() => handleCheckboxChange("images")}
            />
            Show images
          </label>
        </div>
        <div className="container">
          {users.map((user, key) => (
            <User filters={selectedFilters} key={key} data={user} />
          ))}
        </div>
      </div>
      <button onClick={handleFetch}>View Next 1 Users</button>
    </>
  );
};

export default Users;
