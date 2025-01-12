import React from "react";

const Facts = () => {
  return (
    <div className="facts bg-base py-16 ">
      <div className="gap-8 px-8 flex flex-wrap items-center justify-center">
        <div className="w-[25rem] fact-card bg-secondary text-secondary-content p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center text-alert">
            150,000+
          </h3>
          <p className="text-center mt-2">Children in Need of Adoption</p>
        </div>
        <div className="w-[25rem] fact-card bg-secondary text-secondary-content p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center">87%</h3>
          <p className="text-center mt-2">
            Increase in Adoptive Families in 5 Years
          </p>
        </div>
        <div className="w-[25rem] fact-card bg-secondary text-secondary-content p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center">1 in 10</h3>
          <p className="text-center mt-2">
            Children in Orphanages Find Forever Homes
          </p>
        </div>
        <div className="w-[25rem] fact-card bg-secondary text-secondary-content p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center">40%</h3>
          <p className="text-center mt-2">
            Adopted Children Are Under 5 Years Old
          </p>
        </div>
        <div className="w-[25rem] fact-card bg-secondary text-secondary-content p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center">25 Countries</h3>
          <p className="text-center mt-2">
            Involved in International Adoption Programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
