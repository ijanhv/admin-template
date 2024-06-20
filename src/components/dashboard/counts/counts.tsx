import React from "react";
import TopVisitors from "./top-visitors";
import DashboardCard from "@/components/card/dashboard-card";

import dynamic from "next/dynamic";
import Orders from "./orders";
import MonthlyEarnings from "./monthly-earnings";
const AverageDailySales = dynamic(() => import("./average-daily-sales"), {
  ssr: false,
});

const Counts = () => {
  const counts = [
    {
      title: "Daily Visitors",
      value: "100",
      content: <TopVisitors />,
    },
    {
      title: "Average Daily Sales",
      value: "$51,352",
      content: <AverageDailySales />,
    },
    {
      title: "Orders this month",
      value: "1,352",
      content: <Orders />,
    },
    {
      title: "Monthly Earnings",
      value: "$20,360",
      content: <MonthlyEarnings />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 h-full w-full">
      {counts.map((count, index) => (
        <DashboardCard
          key={index}
          title={count.title}
          value={count.value}
          content={count.content}
        />
      ))}
    </div>
  );
};

export default Counts;
