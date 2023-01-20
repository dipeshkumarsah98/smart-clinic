import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BloodDetail from "../common/BloodDetail";
import Suggestion from "../common/Suggestion";
import Table from "../common/Table";
import UserDetail from "../common/UserDetail";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const data = {
    pregnancies: 1,
    Glucose: 85,
    BloodPressure: 66,
    SkinThickness: 29,
    Insulin: 0,
    BMI: 26.6,
    DiabetesPedigreeFunction: 0.351,
    Age: 31,
  };

  useEffect(() => {
    predicitedData();
  }, []);

  const predicitedData = async () => {
    const obj = await axios.post(
      "http://127.0.0.1:8000/diabetes_prediction",
      data
    );
    setUserInfo(obj.data);
  };
  console.log(userInfo);

  return (
    <div className="row">
      <div className="col-7">
        <UserDetail healthStatus={userInfo} />
      </div>
      <div className="col-5 ">
        <BloodDetail />
      </div>
      <div className="col-8">
        <Table data={data} />
      </div>
      <div className="col-4">
        <Suggestion isHealthy={userInfo.isHealthy} />
      </div>
    </div>
  );
};

export default Dashboard;
