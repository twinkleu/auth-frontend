import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Components/Signup/Signup";
import { Login } from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { useState } from "react";

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/home" element={<Home setLoginUser={setLoginUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
