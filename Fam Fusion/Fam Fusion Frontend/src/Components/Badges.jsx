import React from "react";

const Badges = ({ value, id }) => {
  return (
    <div
      key={id}
      className="px-2 py-1 bg-green-400 poppins-regular text-sm rounded-full text-black font-semibold"
    >
      {value}
    </div>
  );
};

export default Badges;
