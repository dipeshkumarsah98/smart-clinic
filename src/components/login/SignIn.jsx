import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../img/bg-green-logo.png";

const SignIn = ({ handleLog }) => {
  const { name } = useParams("name");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { phone: e.target[0].value, password: e.target[1].value };
    if (name === "lab") {
      let url = "http://192.168.1.94:8000/api/lab_assistant/login";
      try {
        const obj = await axios.post(url, data);
        console.log(obj);
      } catch (error) {
        handleLog();
        navigate("/");
        console.log(error);
      }
    }
    if (name === "patient") {
      let url = "http://192.168.1.94:8000/api/patient/login";
      try {
        const obj = await axios.post(url, data);
        console.log(obj);
      } catch (error) {
        navigate("/");
        handleLog();
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex justify-center py-10 md:py-28 w-[70vw] md:w-[50vw] mx-auto my-20 md:my-40 items-center border bg-slate-100 shadow-2xl border-gray-200"
    >
      <div className="flex justify-center items-center flex-col space-y-2">
        <img
          src={Logo}
          color="blue"
          width={100}
          height={100}
          alt="logo"
          className="mb-6"
        />
        <h1 className="text-2xl text-blue-500 mb-3 font-raleway  ">
          Login as {name === "lab" ? "lab assistant" : "Patient"}
        </h1>
        <div className="flex flex-col ">
          <label htmlFor="username">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="border border-blue-500 h-8 px-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-blue-500 h-8 px-2"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
