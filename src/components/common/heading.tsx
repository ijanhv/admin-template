import React from "react";

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="space-y-3">
      <div className="text-xl lg:text-3xl font-semibold">{title}</div>
      <p className="text-sm lg:text-base text-foreground/50">{subtitle}</p>
    </div>
  );
};

export default Heading;
