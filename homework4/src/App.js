import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Login from "./components/login/Login";
import { users } from "./data/data";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSuccessLogin = () => {
    setAuthenticated(true);
    setDisplayedUsers(users.slice(0, 5));
    setCurrentIndex(5);
  };

  const handleShowNextUsers = () => {
    setDisplayedUsers((prevUsers) => [
      ...prevUsers,
      ...users.slice(currentIndex, currentIndex + 5),
    ]);
    setCurrentIndex((prevIndex) => prevIndex + 5);
  };

  return (
    <div className="app">
      {!authenticated ? (
        <Login onSuccessLogin={onSuccessLogin} />
      ) : (
        <>
          (<h1>Users Information</h1>
          <div className="container">
            {displayedUsers.map((user, index) => (
              <Card key={index} user={user} />
            ))}
          </div>
          {currentIndex < users.length && (
            <button onClick={handleShowNextUsers}>View Next 5 Users</button>
          )}
          )
        </>
      )}
    </div>
  );
}

export default App;
