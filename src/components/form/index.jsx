import React from "react";
import Input from "../input";

const Form = ({ data, handleSubmit }) => {
  return (
    <form
      className="border border-gray-200 px-20 py-16"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-merienda mb-4">Diabetes Form</h1>
      {data.map((item) => (
        <Input
          key={item.id}
          name={item.name}
          label={item.label}
          type={item.type}
        />
      ))}

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default Form;
