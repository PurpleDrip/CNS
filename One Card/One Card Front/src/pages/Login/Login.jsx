import React, { useEffect, useState } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    const removeDiv = () => {
      const div = document.querySelector(".satyameva");
      if (div) {
        div.parentNode.removeChild(div);
      }
    };
    const timeoutId = setTimeout(removeDiv, 10000);
    return () => clearTimeout(timeoutId);
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", { username, password })
      .then((response) => {
        if (response.statusCode === 200) {
          navigate("/home");
        }
      });
    console.log(`Username: ${username}, Password: ${password}`);
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/loginadmin", { username, password })
      .then((response) => {
        if (response.statusCode === 200) {
          navigate("/home");
        }
      });
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="h-screen overflow-y-hidden">
      <video autoPlay loop muted id={style.backgroundVideo}>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`${style.satyameva} satyameva`}>
        <img src="/images/satyameva.png" alt="" />
      </div>
      <div className={style.loginForm}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h1 className={style.h1}>SIGN IN</h1>
          <input
            type="text"
            placeholder="Username/1Card ID"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={style.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.input}
          />
          <input
            type="submit"
            id={style.button}
            value="Login"
            className={style.input}
            onClick={handleSubmit}
          />
          {/* <input
            type="submit"
            id={style.button}
            value="Login As Admin"
            onClick={handleSubmit1}
          /> */}
          <a href="/register" className={style.a}>
            Not Registered?
          </a>
          <h3 className="text-red-400 text-lg">{error}</h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
