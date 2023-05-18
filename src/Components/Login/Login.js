import React, { useState } from "react";
import "./Login.scss";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Login = ({ setLoginUser }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = input;
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            setLoginUser(input);
            navigate("/home", { state: { id: email } });
          } else if (res.data === "not exist") {
            alert("User have not sign up");
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
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          value={input.email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          value={input.password}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={(e) =>
            setInput({
              ...input,
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

        <button className="button" type="submit" onClick={handleLogin}>
          Log In
        </button>
        <div className="register-link">
          <p className="link-btn">
            Not Registered?{" "}
            <Link to="/" className="link">
              Click here to join.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
