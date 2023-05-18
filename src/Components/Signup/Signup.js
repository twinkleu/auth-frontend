import React, { useState } from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = user;
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
          name,
        })
        .then((res) => {
          if (res.data === "not exist") {
            //navigate("/home", { state: { id: email } });
            alert("Signup successful");
            navigate("/login");
          } else if (res.data === "exist") {
            alert("User already registered");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSignup}>
        <h2 className="login">Signup</h2>

        <label htmlFor="email">Name</label>
        <input
          value={user.name}
          type="name"
          placeholder="Your Name"
          id="name"
          name="name"
          onChange={(e) =>
            setUser({
              ...user,
              [e.target.name]: e.target.value,
            })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          value={user.email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={(e) =>
            setUser({
              ...user,
              [e.target.name]: e.target.value,
            })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          value={user.password}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={(e) =>
            setUser({
              ...user,
              [e.target.name]: e.target.value,
            })
          }
        />
        <div className="remember-forgot">
          <label>
            <input type="checkbox" className="color" /> Remember Me
          </label>
          <Link to="" className="pwd">
            Forgot Password ?
          </Link>
        </div>

        <button className="button" type="submit" onSubmit={handleSignup}>
          Signup
        </button>
        <div className="register-link">
          <p className="link-btn">
            Already Registered?{" "}
            <Link to="/login" className="link">
              Click here to login.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
