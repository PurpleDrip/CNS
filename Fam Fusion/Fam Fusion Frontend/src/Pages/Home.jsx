import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TitleBar from "../Components/TitleBar";
import Facts from "../Components/Facts";
import SectionWithImage from "../Components/SectionWithImage";
import { useNavigate } from "react-router-dom";
import UserHome from "../Components/UserHome";

function Home() {
  return <UserHome />;
}

export default Home;
