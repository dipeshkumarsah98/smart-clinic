import React from "react";

const UserDetail = () => {
  return (
    <div className="my-5 border border-gray-300 px-16 py-10 bg-stone-100 rounded-xl shadow-lg">
      <div>
        <h1 className="flex items-center font-merienda">
          <i class="fa-solid fa-user mr-3 text-blue-500 "></i> Dipesh Kumar Sah
        </h1>
        <p className="text-gray-500 text-lg mt-3">
          <span className="font-semibold mr-4 ">
            <i class="fa-solid fa-envelope"></i>
          </span>{" "}
          hero@gmail.com
        </p>
        <p className="text-gray-500 text-lg">
          <span className="font-semibold mr-4 ">
            <i class="fa-solid fa-phone"></i>
          </span>{" "}
          9801234567
        </p>
      </div>
      <div>
        <h3 className="flex items-center font-merienda text-rose-500">
          Health Status <i class="fa-solid fa-caret-down ml-3"></i>
        </h3>
        <p className="text-green-600 flex items-center font-raleway  ">
          <i class="fa-regular fa-face-smile mr-3 text-3xl"></i>Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Excepturi quisquam
          repudiandae ipsum corporis repellendus dolores ratione. Temporibus
          dignissimos inventore reprehenderit.S
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
