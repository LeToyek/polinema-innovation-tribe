import React from "react";
import { TipsData } from "~/data/Idea/Create/TipsData";
import TipsButton from "~/parts/Idea/Create/TipsButton";

function ProTips() {
  return (
    <div
      className={
        "p-2 bg-slate-800 hover:ring-purple-600 transition-all ease-in-out duration-500 rounded-md flex flex-col sticky top-16 gap-6 md:w-[35%] h-full hover:ring-2"
      }
    >
      <div>
        <h1 className={"font-bold text-xl mt-4 text-center w-full"}>
          Pro Tips!
        </h1>
      </div>
      <div id={"mainContent"} className={"flex flex-col gap-3 "}>
        {TipsData.map((data) => (
          <TipsButton key={data.name} name={data.name} />
        ))}
      </div>
    </div>
  );
}

export default ProTips;
