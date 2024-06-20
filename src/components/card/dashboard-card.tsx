import React, { ReactNode } from "react";
import { Card } from "../ui/card";

const DashboardCard = ({
  value,
  title,
  content,
}: {
  value: string;
  title: string;
  content: ReactNode;
}) => {
  return (
    <Card className="p-5 rounded-lg border border-gray-200 dark:border-neutral-800  flex flex-col justify-between h-60 lg:h-56">
      <div>
        <h3 className="text-2xl lg:text-3xl font-semibold">{value}</h3>
        <p className="text-sm font-semibold text-gray-500">{title}</p>
      </div>
      <div>{content}</div>
    </Card>
  );
};

export default DashboardCard;
