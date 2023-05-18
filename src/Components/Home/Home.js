import React from "react";
import "./Home.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Homepage = ({ setLoginUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoginUser({});
    navigate("/login");
  };

  return (
    <div className="main-container">
      <div className="homepage">
        <h1>Hello {location.state.id} and welcome to the home</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Homepage;
