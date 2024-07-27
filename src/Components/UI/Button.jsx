import React from "react";

export const Button = ({ name, icon, isActive, onClick, w, h }) => {
  return (
    <button
      onClick={onClick}
      className={`w-${w} h-${h} rounded-full flex items-baseline p-1 ${
        isActive && "bg-custom-gradient"
      } `}
    >
      <span className="flex items-baseline mx-9 mt-2">{icon}</span>
      <span className="flex items-baseline ">{name}</span>
    </button>
  );
};

export const RoundButton = ({ icon, onClick, w, h }) => {
  return (
    <button
      onClick={onClick}
      className={`w-${w} h-${h} rounded-full flex items-center justify-center bg-custom-gradient`}
    >
      {icon}
    </button>
  );
};
