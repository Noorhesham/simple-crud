import React from "react";

const MaxWidthWrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={` ${className || ""}  max-w-[1375px] w-full`}>{children}</div>;
};

export default MaxWidthWrapper;
