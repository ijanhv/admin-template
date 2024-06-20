import React from "react";
import Counts from "./counts/counts";
import dynamic from "next/dynamic";
const Revenue = dynamic(() => import("./graphs/revenue"), { ssr: false });
const DealType = dynamic(() => import("./deal-type"), { ssr: false });

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Counts />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        <div className="lg:col-span-2 w-full">
          <Revenue />
        </div>
        <div className="lg:col-span-1 w-full ">
      <DealType />
        </div>
      </div>
  
    </div>
  );
};

export default Dashboard;
