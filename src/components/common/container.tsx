import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 w-full h-full bg-red m-2">
      {children}
    </div>
  );
};

export default Container;
