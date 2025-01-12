import axios from "axios";
import React, { useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setAll } from "../../userSlice";

const Verify = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const { encrypted, key, iv } = useSelector((state) => state.user);
  console.log(key, iv);
  const verifyDoc = (doc) => {
    axios
      .post("http://localhost:5000/verifydoc", { doc, encrypted, key, iv })
      .then((res) => {
        console.log(res);
        setMsg(res.data.message);
        const { encrypted, key, iv } = res.data;
        setTimeout(() => setMsg(""), 2000);
        dispatch(setAll({ encrypted, key, iv }));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-screen p-12 relative">
      {msg && (
        <h4 className="px-4 rounded-full bg-green-400 py-2 text-black absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 mony gap-2 flex items-center justify-center">
          <IoMdAlert size={25} />
          {msg}
        </h4>
      )}
      <div className="border rounded-xl h-full text-white mony p-4">
        <h1 className="text-center text-[5rem]">Verify Documents</h1>
        <ul className="flex flex-col ml-20 gap-8 my-auto min-h-[60vh]">
          <li>
            Verify Aadhar{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("aadhar")}
            >
              VERIFY
            </button>
          </li>
          <li>
            Verify PAN{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("pan")}
            >
              VERIFY
            </button>
          </li>
          <li>
            Verify Passport{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("passport")}
            >
              VERIFY
            </button>
          </li>
          <li>
            Verify VoterID{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("voter")}
            >
              VERIFY
            </button>
          </li>
          <li>
            Verify Driving License{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("drivinglicense")}
            >
              VERIFY
            </button>
          </li>
          <li>
            Verify Ration Card{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("ration")}
            >
              VERIFY
            </button>
          </li>
          <li>
            Verify Birth Certificate{" "}
            <button
              className="bg-green-400 px-4 py-1 text-black rounded-full ml-4 border border-green-400"
              onClick={() => verifyDoc("birthcertificate")}
            >
              VERIFY
            </button>
          </li>
        </ul>
        <p className="text-5xl text-center tracking-widest">
          Get Verified Now and Unlock Trusted Access<code>!</code>
        </p>
      </div>
    </div>
  );
};

export default Verify;
