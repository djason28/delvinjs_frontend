import React from "react";
import { cn } from "../../lib/cn";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full min-h-[110px] rounded-[var(--radius-lg)] border border-border bg-surface px-3 py-2 text-sm " +
          "focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
