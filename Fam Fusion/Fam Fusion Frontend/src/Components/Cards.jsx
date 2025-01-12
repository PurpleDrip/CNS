import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToLiked,
  addToViewed,
  removeFromLiked,
} from "../Features/profileSlice";

const Cards = ({ data }) => {
  const [isSaved, setIsSaved] = useState(false);

  const [msg, setMsg] = useState("");

  const isRegistered = useSelector((state) => state.user.isRegistered);

  const checkForRegistered = () => {
    if (!isRegistered) {
      setMsg("Please login first to perform these operations.");
      throw new Error("Please login first to perform these operations.");
    }
    return true;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (checkForRegistered()) {
      isSaved ? dispatch(removeFromLiked(data.id)) : dispatch(addToLiked(data));
      console.log(isSaved);
      setIsSaved((prev) => !prev);
    }
  };
  const handleViewClick = () => {
    if (checkForRegistered()) {
      dispatch(addToViewed(data));
      console.log(data);
      navigate(`/profile/${data.id}`);
    }
  };

  return (
    <div
      key={data.id}
      className="border-2 border-neutral h-[25rem] w-[20rem] flex flex-col items-center p-4 gap-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:border-accent"
    >
      {/* Profile Picture */}
      <div className="relative">
        <img
          src="https://picsum.photos/192"
          alt="Child Profile"
          className="h-[12rem] w-[12rem] rounded-full object-cover shadow-md"
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          {data.status}
        </span>
      </div>

      <h1 className="text-xl font-semibold">{data.name}</h1>
      <p className="text-sm text-gray-600">Loves drawing and outdoor games.</p>

      <div className="flex gap-2 mt-2 items-center">
        <h1 className="text-gray-400">Like this Profile?</h1>
        <button
          onClick={handleClick}
          className={`${isSaved ? "text-red-500" : "text-gray-400"} text-2xl `}
          title="Add to favourite"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <button
        className="btn btn-accent mt-2 btn-outline btn-wide"
        onClick={handleViewClick}
      >
        View Profile
      </button>
    </div>
  );
};

export default Cards;
