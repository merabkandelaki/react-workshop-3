import React, { useState } from "react";
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import "./App.css";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="app">
      {!authenticated ? (
        <Login onLogin={() => setAuthenticated(true)} />
      ) : (
        <Users />
      )}
    </div>
  );
};

export default App;
