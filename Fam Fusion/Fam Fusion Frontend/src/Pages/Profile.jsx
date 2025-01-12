import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TitleBar from "../Components/TitleBar";
import { useSelector } from "react-redux";
import Badges from "../Components/Badges";
import { FaHeart } from "react-icons/fa";

const Profile = () => {
  const { id } = useParams();
  console.log(typeof id);
  const [profile, setProfile] = useState(null);
  const allProfiles = useSelector((state) => state.profile.allProfiles);

  useEffect(() => {
    const foundProfile = allProfiles.find((p) => p.id === parseInt(id, 10));
    setProfile(foundProfile);
  }, [id, allProfiles]);

  if (!profile) {
    return <div>Profile not found.</div>;
  }
  return (
    <>
      <TitleBar />
      <div className="min-h-[92.3vh] flex overflow-y-hidden poppins-medium">
        <div className="w-1/3 flex items-center justify-center flex-col">
          <img
            src="https://picsum.photos/480"
            alt={profile.name}
            className="z-0 rounded-full bg-white w-[30rem] mb-8"
          />
          <h1 className="text-2xl text-left">{profile.name}</h1>
          <h2>{profile.age} y'o</h2>
          <h2>From {profile.from}</h2>
          <h2 className="text-3xl mt-4">
            {profile.gender === "Male" ? "👦" : "👧"}
          </h2>
        </div>
        <div className="flex w-2/3 p-20 flex-col">
          <h1 className="text-2xl mb-4 text-primary poppins-medium">
            Organization Name-
            <span className="ml-4 text-white">{profile.organizationName}</span>
          </h1>
          <h2 className="text-2xl mb-8 text-primary">
            Organization Address-
            <span className="text-white ml-4">
              {profile.organizationAddress}
            </span>
          </h2>
          <p className="text-2xl">
            <span className="text-2xl text-primary mr-4">
              Words From the Kid-
            </span>
            {profile.textFromChild}
          </p>
          <h1 className="text-2xl mt-8 text-primary">
            Health Status-{" "}
            <span className="text-2xl text-white ml-4">{profile.health}</span>
          </h1>
          <div className="flex items-center gap-8 my-8">
            <h1 className="text-2xl text-primary">Hobbies - </h1>
            {profile.hobbies.map((data, id) => (
              <Badges value={data} id={id} />
            ))}
          </div>
          <div className="py-20 flex gap-4 mx-auto">
            <button className="btn btn-secondary btn-wide btn-outline">
              Message
            </button>
            <button className="btn btn-secondary btn-wide btn-outline">
              Voice Call
            </button>
            <button className="btn btn-secondary btn-wide btn-outline">
              Video Call
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="px-8 py-2 bg-white text-black border border-white rounded font-semibold hover:bg-black hover:text-white">
              Adopt Now
            </button>
          </div>
        </div>
      </div>
      {profile.isFavourite && (
        <div className="absolute top-32 right-20 z-50">
          <FaHeart color="red" size={30} />
        </div>
      )}
    </>
  );
};

export default Profile;
