import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const TopVisitors = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>Top Visitors</h3>
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src="https://essence-ui-kit.vercel.app/static/user/user-11.png" />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://essence-ui-kit.vercel.app/static/user/user-10.png " />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://essence-ui-kit.vercel.app/static/user/user-13.png" />
        </Avatar>
      </div>
    </div>
  );
};

export default TopVisitors;
