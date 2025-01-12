import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserRole } from "../Features/userSlice";
import { useNavigate } from "react-router-dom";

const Role = () => {
  //check for tokens here
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    dispatch(setUserRole(role));
    navigate("/home");
  };
  return (
    <div className="h-screen flex flex-col justify-evenly">
      <h1 className="text-[5rem] ml-[12rem] poppins-light ">Fam Fusion</h1>
      <div className="role-wrapper flex items-center justify-center gap-16 ">
        <div className="video-container w-3/5">
          <video
            src="/videos/intro-video.webm"
            autoPlay
            muted
            loop
            className="rounded-xl"
          ></video>
        </div>
        <div className="role-container w-1/5 flex flex-col items-center gap-4 justify-center">
          <h1 className="text-3xl poppins-thin">WHO ARE U?</h1>
          <button
            className="btn bg-secondary btn-wide text-secondary-content hover:text-white"
            onClick={() => {
              console.log("The visiter is an User.");
              handleRoleSelection("user");
            }}
          >
            USER
          </button>
          <div
            className={`divider ${
              window.innerWidth < 800 ? "divider-vertical" : ""
            }`}
          >
            OR
          </div>
          <button
            className="btn btn-wide bg-accent text-accent-content hover:text-white"
            onClick={() => {
              console.log("The visiter is an Organization.");
              handleRoleSelection("organ");
            }}
          >
            ORGANIZATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Role;
