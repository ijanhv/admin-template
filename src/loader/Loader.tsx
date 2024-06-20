import React from "react";

const Loader = () => {
  return (
    <div className="h-96 w-full ">
      <div className="flex-col gap-4 w-full flex items-center justify-center h-full">
        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
