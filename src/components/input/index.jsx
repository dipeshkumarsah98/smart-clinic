import React from "react";

const Input = ({ name, label, type }) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={name} className="mb-2 text-lg">
        {label}
      </label>
      <input
        className="border border-blue-500 h-9 px-1"
        type={type || "text"}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
