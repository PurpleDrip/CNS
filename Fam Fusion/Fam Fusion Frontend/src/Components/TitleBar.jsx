import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TitleBar = () => {
  const isRegistered = useSelector((state) => state.user.isRegistered);
  return (
    <div className="px-8 text-accent-content h-16 bg-accent flex items-center justify-between sticky top-4 z-10 rounded-3xl mx-8">
      <div>
        <a href="/home" className="text-4xl font-semibold">
          Fam Fusion
        </a>
      </div>
      <div className="flex gap-4">
        {isRegistered ? (
          <>
            <Link to="/" className="btn btn-sm btn-ghost">
              Liked Profiles
            </Link>
            <Link to="/about-us" className="btn btn-sm btn-ghost">
              History
            </Link>
          </>
        ) : (
          <>
            <Link to="/about-us" className="btn btn-sm btn-ghost">
              Login
            </Link>
            <Link to="/about-us" className="btn btn-sm btn-ghost">
              Register
            </Link>
          </>
        )}

        <Link to="/adopt" className="btn btn-sm btn-primary">
          Adopt Now
        </Link>
      </div>
    </div>
  );
};

export default TitleBar;
