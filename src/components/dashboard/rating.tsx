import { Star, StarHalf } from "lucide-react";
import React from "react";
import { Progress } from "../ui/progress";
import { Card, } from "../ui/card";

const Rating = () => {
  const ratings = [
    {
      name: "5 Star",
      value: 70,
    },
    {
      name: "4 Star",
      value: 45,
    },
    {
      name: "3 Star",
      value: 20,
    },
    {
      name: "2 Star",
      value: 19,
    },
    {
      name: "1 Star",
      value: 10,
    },
  ];
  return (
    <div className="flex flex-col gap-3 items-center w-full ">
      <Card className="p-4 rounded-lg space-y-2  w-full">
        <div className="flex items-center gap-1 justify-center">
          <Star className="w-6 h-6 " fill="#FDBF05" color="#FDBF05" />

          <Star className="w-6 h-6 " fill="#FDBF05" color="#FDBF05" />
          <Star className="w-6 h-6 " fill="#FDBF05" color="#FDBF05" />
          <Star className="w-6 h-6 " fill="#FDBF05" color="#FDBF05" />
          <StarHalf className="w-6 h-6 " fill="#FDBF05" color="#FDBF05" />
        </div>

        <h3 className="text-2xl font-semibold text-center">4.5</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Based on 1000 reviews
        </p>
      </Card>

      <div className="flex flex-col gap-3 justify-between w-full ">
        {ratings.map((rating, index) => (
          <div
            key={index}
            className="flex items-center gap-6 justify-between w-full"
          >
            <p className="flex flex-shrink-0 text-sm">{rating.name}</p>
            <Progress value={rating.value} />
            <p className="text-foreground/70">
              {((rating.value / 10000) * 100).toFixed(0)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
