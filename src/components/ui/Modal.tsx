import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

export function Modal({
  open,
  onClose,
  title,
  children
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement | null>(null);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    el.addEventListener("cancel", onCancel);
    return () => el.removeEventListener("cancel", onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      className={`w-[min(960px,92vw)] rounded-[var(--radius-xl)] border border-border bg-surface p-0 ${
        reduce ? "" : "animate-[fadeIn_140ms_ease-out]"
      }`}
      onClick={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!inDialog) onClose();
      }}
    >
      <div className="p-5 border-b border-border flex items-center justify-between">
        <div className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </div>
        <Button variant="ghost" onClick={onClose} aria-label="Close">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-5">{children}</div>

      <style>{`
        dialog::backdrop { background: rgba(15, 23, 42, 0.35); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </dialog>
  );
}
