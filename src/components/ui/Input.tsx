import React from "react";
import { cn } from "../../lib/cn";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-[var(--radius-lg)] border border-border bg-surface px-3 py-2 text-sm " +
          "focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
