import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
// Report, Heart,
const Home = () => {
  return (
    <div className="container-fluid row">
      <SideBar />
      <div className="col-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
