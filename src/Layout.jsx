import React from "react";
import { Navbar, Right } from "./Screens";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex w-full h-full bg-[#2D2E36] rounded-2xl">
      <div className="border rounded-l-2xl border-[#101011fd]">
        <Navbar />
      </div>
      <div className="border w-full h-full rounded-r-2xl border-[#101011fd] relative flex">
        <div className="w-3/4 rounded-l-2xl p-2">
          <Outlet />
        </div>
        <div className="w-1/4 rounded-r-2xl p-2">
          <Right />
        </div>
      </div>
    </div>
  );
}
