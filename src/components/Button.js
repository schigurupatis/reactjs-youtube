import React from "react";

const Button = ({ data }) => {
  return (
    <button
      type="button"
      className="px-3 py-1 bg-gray-200 text-black rounded-lg"
    >
      {data}
    </button>
  );
};

export default Button;
