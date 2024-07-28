import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

export const Card = ({ title, value, icon }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 bg-custom-gradient rounded-full flex items-center justify-center mr-9 text-white">
        {icon}
      </div>
      <div>
        <h1 className="font-bold">{value}</h1>
        <p className="text-xs text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export const DisplayCard = ({ icon, title, quantity, subTitle }) => {
  return (
    <div className="max-md:w-full w-52 h-full bg-card-gradient pl-8 pt-8 rounded-3xl m-2">
      <div className="w-10 h-10 rounded-full flex justify-center items-center bg-custom-gradient">
        {icon}
      </div>
      <div className="mt-2 flex flex-col space-y-3">
        <p className="text-gray-400">{title}</p>
        <h1
          className="text-4xl font-bold mb-2 flex-auto"
          style={{
            background: "linear-gradient(to bottom, #ffffff 50%, #000000)",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            textShadow: "2px 5px 15px black",
          }}
        >
          {quantity}
        </h1>
        <p className="text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

export const GlowCard = ({ title, desctiption, value, percent, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className=" bg-[#282C35] flex w-full md:w-96 h-40 rounded-3xl p-5 m-3 transition-all duration-300"
      style={{
        boxShadow: isHovered
          ? `-3px -3px 1px ${color}, 5px 6px 20px rgba(0,0,0,0.5)`
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" w-1/2 h-full flex flex-col justify-center items-start">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs text-gray-400">{desctiption}</p>
        <h1 className="font-bold text-xl">{value}</h1>
      </div>
      <div className="w-1/2 h-full relative flex ">
        <div className=" w-28 h-28 md:w-36 md:h-36 flex justify-center items-center  bg-gauge-gradient rounded-full p-3">
          <CircularProgressbar
            value={percent}
            text={`${percent}%`}
            strokeWidth={4}
            styles={buildStyles({
              textColor: color,
              pathColor: color,
              rotation: "-0.2",
              strokeLinecap: "round",
            })}
          />
        </div>

        <div className="absolute right-0 top-0">
          {percent < 60 ? (
            <GoArrowDownRight style={{ color: color, fontSize: "1.5rem" }} />
          ) : (
            <GoArrowUpRight style={{ color: color, fontSize: "1.5rem" }} />
          )}
        </div>
      </div>
    </div>
  );
};
