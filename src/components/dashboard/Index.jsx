import React from "react";
import BloodDetail from "../common/BloodDetail";
import UserDetail from "../common/UserDetail";

const Dashboard = () => {
  return (
    // <div className="grid grid-cols-2 grid-flow-row gap-4 ">
    <div className="row">
      <div className="col-7">
        <UserDetail />
      </div>
      <div className="col-5 ">
        <BloodDetail />
      </div>
    </div>
  );
};

export default Dashboard;
