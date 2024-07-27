import React, { useState } from "react";
import { RoundButton } from "./Button";
import { CiSearch } from "react-icons/ci";

export function SearchBar() {
  const [search,setSearch] = useState("")

  function handelOnClick(){

  }
  return (
    <div className="w-64 h-12 flex items-center rounded-full p-2 bg-custom-gradient focus-within:outline">
      <RoundButton icon={<CiSearch style={{fontWeight:"bold"}} />} w="8" h="8" onClick={handelOnClick} />
      <input
        type="text"
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
        placeholder="Search for stats"
        className="w-full h-full bg-transparent focus:outline-none ml-2"
        autoComplete="on"
      />
    </div>
  );
}
