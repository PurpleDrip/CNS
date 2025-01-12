import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RegisterOrgan = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "organ") {
      navigate("/");
    }
  }, [role, navigate]);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="form-container p-8 rounded-xl bg-primary">
        <form className="flex flex-col gap-4 w-[18rem]">
          <h1 className="text-primary-content text-2xl">REGISTER</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-primary-content">
                Organization Name
              </span>
            </div>
            <input
              type="text"
              placeholder="John Adoption Center"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-primary-content">
                Organization Email
              </span>
            </div>
            <input
              type="gmail"
              placeholder="johnadoption@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-primary-content">
                Organization Address
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Church Street, Behind Hard Rock Cafe."
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-primary-content">Password</span>
            </div>
            <input
              type="password"
              placeholder="johnadoption@123"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button
            type="submit"
            className="btn btn-accent text-secondary-content"
          >
            Submit
          </button>
          <Link
            to="/organ"
            className="mx-auto hover:underline text-primary-content"
          >
            Already have an account??
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterOrgan;
