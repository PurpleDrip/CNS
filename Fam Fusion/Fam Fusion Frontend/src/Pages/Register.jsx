import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "user") {
      navigate("/");
    }
  }, [role, navigate]);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="form-container p-8 rounded-xl bg-secondary">
        <form className="flex flex-col gap-8">
          <h1 className="text-secondary-content text-3xl">REGISTER</h1>
          <label className="input input-bordered flex items-center gap-2">
            Username
            <input type="text" className="grow" placeholder="John Doe" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              className="grow"
              placeholder="johndoe@gmail.com"
            />
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <label className="form-control -mt-4">
            <div className="label">
              <span className="label-text text-primary-content">Address</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-20"
              placeholder="22nd Street, Winston Road..."
            ></textarea>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input type="password" className="grow" placeholder="johndoe123" />
          </label>
          <button
            type="submit"
            className="btn btn-primary text-primary-content"
          >
            Submit
          </button>
          <Link
            to="/user"
            className="mx-auto -mt-4 hover:underline text-primary-content"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
