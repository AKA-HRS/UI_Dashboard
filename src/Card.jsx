import React from "react";

export default function Card() {
  const style = {
    base: "w-72 h-52 border-2 shadow-bottom rounded-lg  bg-green-400",
    before:
      "before:block before:relative before:bg-green-400 before:content-[''] before:w-40 before:rounded-lg before:h-10 before:-top-5 before:border-t-2",
    after:
      "after:block after:relative after:shadow-bottom after:bg-green-400 after:content-[''] after:w-40 after:rounded-lg after:h-10 after:bottom-14 after:-right-28 after:border-b-2 ",
  };
  return (
    <div className="p-8 relative">
      <div className={[style.base, style.after, style.before].join(" ")}>
        <div className="w-full h-full p-2">sdfsfdsfsf</div>
      </div>
    </div>
  );
}
