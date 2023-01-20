import React from "react";

const BloodDetail = () => {
  return (
    <div className="my-5 grid grid-rows-3 grid-flow-col gap-3">
      {" "}
      <div className="bg-white px-2 py-1 rounded-lg  border border-gray-200">
        <p className="flex items-center font-meriendam mt-2 ">
          79.79 bph
          <i class="fa-solid fa-heart-pulse ml-3 text-red-600 text-3xl"></i>
        </p>
        <p className="font-nunito">Heart rate</p>
      </div>
      <div className="bg-white px-2 py-1 rounded-lg shadow border border-gray-200">
        <p className="flex items-center font-merienda mt-2 font-semibold">
          120 mmHg
          <i class="fa-solid fa-droplet ml-3 text-red-600 text-3xl"></i>
        </p>
        <p className="font-nunito">Blood Pressure</p>
      </div>
      <div className="bg-white px-2 py-1 rounded-lg shadow border border-gray-200">
        <p className="flex items-center font-merienda mt-2 font-semibold">
          15 bpm
          <i class="fa-solid fa-lungs ml-3 text-red-600 text-3xl"></i>
        </p>
        <p className="font-nunito">Respetory Rate</p>
      </div>
      <div className="bg-white px-2 py-1 rounded-lg shadow border border-gray-200">
        <p className="flex items-center font-merienda mt-2 font-semibold">
          170 mg/dL
          <i class="fa-solid fa-glass-water ml-3 text-red-600 text-3xl"></i>
        </p>
        <p className="font-nunito">Blood Gluecose</p>
      </div>
      <div className="bg-white px-2 py-1 rounded-lg shadow border border-gray-200">
        <p className="flex items-center font-merienda mt-2 font-semibold">
          135.4 C
          <i class="fa-solid fa-temperature-three-quarters ml-3 text-red-600 text-3xl"></i>
        </p>
        <p className="font-nunito">Body Temperateure</p>
      </div>
      <div className="bg-white px-2 py-1 rounded-lg shadow border border-gray-200">
        <p className="flex items-center font-merienda mt-2 font-semibold">
          210 mg/dL
          <i class="fa-solid fa-wine-bottle ml-3 text-red-600 text-3xl"></i>
        </p>
        <p className="font-nunito">Blood Cholesterol</p>
      </div>
    </div>
  );
};

export default BloodDetail;
