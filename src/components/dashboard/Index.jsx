import React from "react";
import BloodDetail from "../common/BloodDetail";
import Suggestion from "../common/Suggestion";
import Table from "../common/Table";
import UserDetail from "../common/UserDetail";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-7">
        <UserDetail />
      </div>
      <div className="col-5 ">
        <BloodDetail />
      </div>
      <div className="col-8">
        <Table />
      </div>
      <div className="col-4">
        <Suggestion />
      </div>
    </div>
  );
};

export default Dashboard;
