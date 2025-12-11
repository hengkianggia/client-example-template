import { cn } from "@/lib/utils";
import React from "react";

const GlobalWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "flex w-full flex-col items-center")}>
      {children}
    </div>
  );
};

export default GlobalWrapper;
