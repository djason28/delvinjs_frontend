import React from "react";
import { cn } from "../../lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base = 
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium " +
    "transition cursor-pointer select-none hover:-translate-y-[1px] active:translate-y-0 " +
    "disabled:opacity-50 disabled:pointer-events-none focus:outline-none";


  const styles: Record<string, string> = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-[var(--shadow-soft)]",
    secondary:
      "bg-[color:color-mix(in_srgb,var(--accent)_75%,white)] text-foreground hover:bg-[color:color-mix(in_srgb,var(--accent)_92%,white)] border border-border",
    ghost:
      "bg-transparent text-foreground hover:bg-[color:color-mix(in_srgb,var(--secondary)_18%,white)]"
  };

  return <button className={cn(base, styles[variant], className)} {...props} />;
}
