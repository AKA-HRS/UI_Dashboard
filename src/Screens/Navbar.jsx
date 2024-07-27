import React, { useEffect, useState } from "react";
import { Button } from "../Components/UI";
import { HiHomeModern } from "react-icons/hi2";
import { BiMenu } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { GoGraph } from "react-icons/go";
import dp from "../assets/dp.jpeg";
import { useNavigate } from "react-router-dom";
import { useNav } from "../Context/navigation";

const btnList = [
  {
    name: "Home",
    icon: <HiHomeModern />,
    linkTo: "/",
  },
  {
    name: "Projects",
    icon: <GrWorkshop />,
    linkTo: "projects",
  },
  {
    name: "Billings",
    icon: <BsBank />,
    linkTo: "billings",
  },
  {
    name: "Team Members",
    icon: <CgProfile />,
    linkTo: "team_members",
  },
  {
    name: "Stats",
    icon: <GoGraph />,
    linkTo: "stats",
  },
  {
    name: "Settings",
    icon: <SlSettings />,
    linkTo: "settings",
  },
];

export const Navbar = () => {
  const {active,setActive} = useNav();

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <div className="text-white relative flex flex-col space-y-10  rounded-l-3xl h-full w-72 p-2 ">
      <div className="w-full">
        <button className="ml-10">
          <BiMenu
            style={{
              width: "2rem",
              height: "2rem",
            }}
          />
        </button>
      </div>

      {btnList.map((btn) => (
        <Button
          key={btn.name}
          name={btn.name}
          icon={btn.icon}
          onClick={() => handleClick(btn.linkTo)}
          isActive={active === btn.linkTo}
          w={"full"}
          h={"10"}
        />
      ))}

      <div className="w-auto h-auto flex flex-col justify-center items-center absolute bottom-16 left-10">
        <button className="w-16 h-16 rounded-full flex justify-center items-center relative p-2 from-black to-slate-600 bg-custom-gradient">
          <img
            src={dp}
            alt="profile"
            className="rounded-full h-full w-full object-cover"
          />
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-500 text-center text-2xl font-bold"></span>
        </button>
        <p className="font-bold text-sm">David Milan</p>
      </div>
    </div>
  );
};
