import React from "react";
import { cn } from "../../lib/cn";

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl lg:max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6",
        className
      )}
      {...props}
    />
  );
}
