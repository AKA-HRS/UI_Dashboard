import React, { useId } from "react";
import { Chart, Card, RoundButton } from "../Components/UI";
import { SlSettings } from "react-icons/sl";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useNav } from "../Context/navigation";
import { MdProductionQuantityLimits, MdSell } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";

const btnList = [
  {
    icon: <SlSettings style={{ width: "1.2rem", height: "1.2rem" }} />,
    linkTo: "settings",
  },
  {
    icon: <BiBell style={{ width: "1.2rem", height: "1.2rem" }} />,
    linkTo: "projects",
  },
  {
    icon: <CgProfile style={{ width: "1.2rem", height: "1.2rem" }} />,
    linkTo: "team_members",
  },
];

const infoList = [
  {
    title: "Total Sales",
    value: "230k",
    icon: <MdSell style={{ width: "1rem", height: "1rem" }} />,
  },
  {
    title: "Customers",
    value: "8.549k",
    icon: <CgProfile style={{ width: "1rem", height: "1rem" }} />,
  },
  {
    title: "Products",
    value: "1.423k",
    icon: (
      <MdProductionQuantityLimits style={{ width: "1rem", height: "1rem" }} />
    ),
  },
  {
    title: "Revenue",
    value: "$9745",
    icon: <FaChartPie style={{ width: "1rem", height: "1rem" }} />,
  },
];
export const Right = () => {
  const { setActive } = useNav();

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <div className="bg-glass-gradient w-full relative h-full flex items-center flex-col rounded-3xl py-6 px-1 text-white">
      <div className="flex justify-center items-center space-x-5 w-full m-2 h-16 mt-8 ">
        {btnList.map((btn) => (
          <RoundButton
            key={useId()}
            icon={btn.icon}
            onClick={() => handleClick(btn.linkTo)}
            w={"12"}
            h={"12"}
          />
        ))}
      </div>

      <div className=" w-full mt-10 p-5">
        <h3 className="mb-5 font-bold text-xl">Sales Revenue</h3>
        {infoList.map((data) => (
          <div className="flex mt-8" key={useId()}>
            <Card title={data.title} value={data.value} icon={data.icon} />
          </div>
        ))}
      </div>

      <div className="w-full mt-5 p-5 ">
        <h3 className="mb-5 font-bold text-xl">Statistics</h3>
        <div className="w-full h-64 relative flex bg-card-gradient rounded-2xl  overflow-hidden pt-5">
          <Chart  />
        </div>
      </div>
    </div>
  );
};
