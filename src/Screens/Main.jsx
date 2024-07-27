import React from "react";
import { SearchBar } from "../Components/UI/SearchBar";
import { DisplayCard, GlowCard } from "../Components/UI/Card";
import { IoCompassOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";

const cardList = [
  {
    icon: <IoEyeOutline style={{ fontSize: "1.5rem" }} />,
    title: "views",
    quantity: "500",
    subTitle: "Per Day",
  },
  {
    icon: <IoCompassOutline style={{ fontSize: "1.5rem" }} />,
    title: "visits",
    quantity: "2000",
    subTitle: "Per minutes",
  },
  {
    icon: <MdOutlineStorefront style={{ fontSize: "1.5rem" }} />,
    title: "Orders",
    quantity: "5100",
    subTitle: "Per Day",
  },
];

const card = [
  {
    title: "Sales",
    desctiption: "Total Sales Today",
    value: "$500",
    percent: "55",
    color: "#fc6c85",
  },
  {
    title: "Profit",
    desctiption: "Today vs Yesterday",
    value: "$150",
    percent: "30",
    color: "purple",
  },
  {
    title: "Orders",
    desctiption: "Today Order Today",
    value: "1000",
    percent: "10",
    color: "lightblue",
  },
  {
    title: "Visits",
    desctiption: "Today Visit Today",
    value: "400",
    percent: "70",
    color: "lightgreen",
  },
];

export const Main = () => {
  return (
    <div className="w-full h-full p-10 text-white">
      <SearchBar />

      <div className="w-64 h-20 mt-10">
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            background: "linear-gradient(to bottom, #ffffff 50%, #000000)",
            backgroundClip: "text",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            textShadow: "2px 5px 15px black",
          }}
        >
          Hello David
        </h1>
        <p className="text-sm text-gray-400">Welcome Back !</p>
      </div>

      <div className="w-full h-60 mt-2 flex justify-evenly items-center">
        {cardList.map((card) => (
          <DisplayCard
            icon={card.icon}
            title={card.title}
            quantity={card.quantity}
            subTitle={card.subTitle}
          />
        ))}
      </div>

      <div className="w-full h-96 mt-2 relative flex flex-wrap justify-evenly items-center">
        {card.map((c) => (
          <GlowCard
            color={c.color}
            desctiption={c.desctiption}
            title={c.title}
            value={c.value}
            percent={c.percent}
          />
        ))}
      </div>
    </div>
  );
};
