import React from "react";

const Table = ({ data }) => {
  return (
    <div className="bg-white px-5 py-3 shadow-xl border border-gray-200 h-[40vh] overflow-scroll ">
      <table className="table">
        <thead>
          <tr className="bg-green-200">
            {Object.keys(data).map((item, index) => (
              <th key={item} scope="col">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(data).map((item) => (
              <th key={item} scope="row">
                {data[item]}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
