import React from "react";
import { cn } from "../../lib/cn";

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("section-divider", className)} {...props} />;
}
