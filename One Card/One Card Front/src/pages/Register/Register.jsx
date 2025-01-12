import React from "react";
import style from "./register.module.css";

const Register = () => {
  return (
    <div className="max-h-screen">
      <video autoPlay loop muted id={style.backgroundVideo}>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.registerForm}>
        <form action="" className="flex flex-col items-center justify-center">
          <h1 className={style.h1}>REGISTER</h1>
          <input
            type="text"
            placeholder="Name"
            required
            className={style.input}
          />
          <input
            type="text"
            placeholder="Email"
            required
            className={style.input}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            required
            className={style.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={style.input}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className={style.input}
          />
          <input type="submit" id={style.button} />
          <a href="/" className={style.a}>
            Already have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
