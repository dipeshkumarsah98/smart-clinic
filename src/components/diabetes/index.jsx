import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Form from "../form";
import Input from "../input";

// 'pregnancies' : 1,
//     'Glucose' :85,
//     'BloodPressure' :66,
//     'SkinThickness' :29,
//     'Insulin' :0,
//     'BMI' :26.6,
//     'DiabetesPedigreeFunction' : 0.351,
//     'Age' :31

const Diabetes = () => {
  const property = [
    { id: 1, name: "pregnancies", label: "Pregnancies", type: "number" },
    { id: 2, name: "BloodPressure", label: "Blood Pressure", type: "number" },
    { id: 3, name: "SkinThickness", label: "Skin Thickness", type: "number" },
    { id: 4, name: "Insulin", label: "Insulin", type: "number" },
    { id: 5, name: "bmi", label: "BMI", type: "number" },
    {
      id: 6,
      name: "diabetesPedigreeFunction",
      label: "DiabetesPedigreeFunction",
      type: "number",
    },
    { id: 7, name: "age", label: "Age", type: "number" },
  ];

  useEffect(() => {
    preditDiabetes();
  }, []);

  const preditDiabetes = async () => {
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
    try {
      const obj = await axios.post(
        "http://127.0.0.1:8000/diabetes_prediction",
        data
      );
      // const obj = await axios.get("http://192.168.1.94:8000/api/patients");
      console.log(obj);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {};
  return (
    <div>
      <Form handleSubmit={handleSubmit} data={property} />
    </div>
  );
};

export default Diabetes;
