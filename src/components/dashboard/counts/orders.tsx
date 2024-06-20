import { Progress } from "@/components/ui/progress";
import React from "react";

const Orders = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3">
        <h3 className="font-semibold text-xl">1,500 to Goal</h3>
        <p className="text-foreground/60 ">75%</p>
      </div>
      <Progress value={33} />
    </div>
  );
};

export default Orders;
