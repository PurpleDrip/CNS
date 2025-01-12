import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../Components/Cards";
import { useSelector, useDispatch } from "react-redux";
import { addToViewed } from "../Features/profileSlice";

const AdoptHero = () => {
  const [filters, setFilters] = useState({
    name: "",
    minAge: "",
    maxAge: "",
    gender: "",
    location: "",
    healthCondition: "",
    siblings: false,
    sortBy: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters submitted:", filters);
    // Add your API or filter logic here
  };

  const handleReset = () => {
    setFilters({
      name: "",
      minAge: "",
      maxAge: "",
      gender: "",
      location: "",
      healthCondition: "",
      siblings: false,
      sortBy: "",
    });
  };
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

  const handleViewClickRandom = (data) => {
    if (checkForRegistered()) {
      dispatch(addToViewed(data));
      console.log(data);
      navigate(`/profile/${data.id}`);
    }
  };
  const data = useSelector((state) => state.profile.allProfiles);
  const likedProfiles = useSelector((state) => state.profile.likedProfiles);
  const viewedProfiles = useSelector((state) => state.profile.viewedProfiles);

  const generateRandomProfile = () => {
    if (!likedProfiles || likedProfiles.length === 0) return {};
    return likedProfiles[Math.floor(Math.random() * likedProfiles.length)];
  };
  const randomProfile = generateRandomProfile();
  console.log("Random Profile", randomProfile);

  const generateLast2Viewed = () => {
    if (!viewedProfiles || viewedProfiles.length < 2) return [];
    return viewedProfiles.slice(-2);
  };
  const last2Viewed = generateLast2Viewed();
  console.log("Last 2 viewed", last2Viewed);

  return (
    <div className="flex min-h-screen mt-4 mx-8 gap-4">
      {/* Left Sidebar */}
      <div className="left w-1/4 p-4 sticky h-[70vh] flex items-center justify-center top-36">
        <div className="filter-container rounded-3xl p-4 w-full bg-[#212121] shadow-2xl ">
          <h1 className="text-3xl mb-4">Filters</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Filter */}
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="input input-bordered w-full bg-black text-white"
            />

            {/* Age Range */}
            <div className="flex flex-col gap-2">
              <label className="text-base">Age Range:</label>
              <div className="flex items-center gap-4">
                <span className="text-sm w-2/5">Min Age: {filters.minAge}</span>
                <input
                  type="range"
                  name="minAge"
                  min="1"
                  max={filters.maxAge}
                  value={filters.minAge}
                  onChange={handleInputChange}
                  className="range range-primary w-full"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-2/5">Max Age: {filters.maxAge}</span>
                <input
                  type="range"
                  name="maxAge"
                  min={filters.minAge}
                  max="80"
                  value={filters.maxAge}
                  onChange={handleInputChange}
                  className="range range-primary w-full "
                />
              </div>
            </div>

            {/* Gender Filter */}
            <select
              name="gender"
              value={filters.gender}
              onChange={handleInputChange}
              className="select select-bordered w-full bg-black text-white"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>

            {/* Location */}
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Location/Nearest Orphanage"
              className="input input-bordered w-full bg-black text-white"
            />

            {/* Health Conditions */}
            <select
              name="healthCondition"
              value={filters.healthCondition}
              onChange={handleInputChange}
              className="select select-bordered w-full bg-black text-white"
            >
              <option value="">Health Condition</option>
              <option value="none">No Known Conditions</option>
              <option value="specialNeeds">Special Needs</option>
            </select>

            {/* Sibling Group */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="siblings"
                checked={filters.siblings}
                onChange={handleInputChange}
                className="checkbox bg-white text-white"
              />
              Part of a sibling group
            </label>

            {/* Sort By */}
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleInputChange}
              className="select select-bordered w-full bg-black text-white"
            >
              <option value="">Sort By</option>
              <option value="ageAsc">Age: Low to High</option>
              <option value="ageDesc">Age: High to Low</option>
              <option value="location">Location: Nearest First</option>
            </select>

            {/* Buttons */}
            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary w-1/2">
                Apply
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-secondary w-1/2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Center Content */}
      <div className="center w-1/2 min-h-[100vh] mt-8">
        <div className="card-container flex flex-wrap gap-8">
          {data.map((atom, key) => (
            <Cards data={atom} key={key} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right w-1/4 sticky top-24 h-[85vh] flex justify-center flex-col">
        <div className="right-container">
          <div className="right sticky top-0">
            {/* Profile */}
            {isRegistered && (
              <div className="p-4 border-b">
                <div className="flex items-center gap-4">
                  <img
                    src="https://picsum.photos/48"
                    alt="User Profile"
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <h3 className="text-lg font-bold">User's Name</h3>
                    <button className="text-sm text-primary underline">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Random Generator */}
            {randomProfile && (
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold">Random Profile</h2>
                <div className="mt-2 poppins-medium">
                  <img
                    src="https://picsum.photos/336"
                    alt="Random Profile"
                    className="rounded-lg w-[21rem]"
                  />
                  <h3 className="text-lg mt-2">
                    {randomProfile.gender === "Male" ? "👦" : "👧"}{" "}
                    {randomProfile.name || "Sarah"}, {randomProfile.age || 7}{" "}
                    years
                  </h3>
                  <p className="text-sm">
                    Location- {randomProfile.from || "California"}
                  </p>
                  <button
                    className="btn btn-primary btn-sm mt-2"
                    onClick={() => handleViewClickRandom(randomProfile)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            )}
            {/* History */}
            {last2Viewed.length > 0 && (
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold">Recently Viewed</h2>
                <ul className="mt-2 space-y-2">
                  {last2Viewed.map((profile, index) => (
                    <li key={index}>
                      <div className="flex justify-between items-center">
                        <span>
                          {profile.gender === "Male" ? "👦" : "👧"}{" "}
                          {profile.name || "Ethan"}, {profile.age || 5} years
                        </span>
                        <button
                          className="text-sm text-primary underline"
                          onClick={() => handleViewClickRandom(profile)}
                        >
                          View
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptHero;
