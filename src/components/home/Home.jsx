import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
// Report, Heart,
const Home = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <SideBar />
        <div className="col-10 bg-[#f4f6f9]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
