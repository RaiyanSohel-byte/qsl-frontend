import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-primary hover:bg-[#3b36b8] transition-colors text-white font-bold py-4 px-10 text-lg w-full lg:w-auto">
      {children}
    </button>
  );
};

export default PrimaryButton;
