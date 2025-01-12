import React, { useEffect } from "react";
import TitleBar from "../Components/TitleBar";
import AdoptHero from "../Components/AdoptHero";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Adopt = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "user") {
      navigate("/");
    }
  });

  return (
    <div>
      <TitleBar />
      <AdoptHero />
    </div>
  );
};

export default Adopt;
