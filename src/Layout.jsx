import React from "react";
import { Navbar, Right } from "./Screens";
import { Outlet } from "react-router-dom";
import { useNav } from "./Context/navigation";

export default function Layout() {
  const {isExpanded} = useNav()
  return (
    <div className="flex w-full h-full bg-[#2D2E36] rounded-2xl">
      <div className={`border w-${isExpanded?"72":"24"} h-full rounded-l-2xl border-[#101011fd] transition-all duration-300`}>
        <Navbar />
      </div>
      <div className={`border ${isExpanded?"w-[85%]":"w-[95%]"}  h-full rounded-r-2xl border-[#101011fd] relative flex`}>
        <div className="w-full md:w-9/12 h-full rounded-l-2xl p-2 overflow-y-auto">
          <Outlet />
        </div>
        <div className="w-1/4 h-full hidden md:flex rounded-r-2xl p-2">
          <Right />
        </div>
      </div>
    </div>
  );
}
