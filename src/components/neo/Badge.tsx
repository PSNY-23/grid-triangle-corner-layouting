import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "paper" | "dark";
  count?: number;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "teal",
  count,
}) => {
  const styles = {
    teal: "bg-[var(--teal-primary)] text-white shadow-md",
    paper:
      "bg-[var(--paper-raised)] text-[var(--ink-primary)] border border-white/40 shadow-sm",
    dark: "bg-[var(--ink-primary)] text-white shadow-md",
  };

  return (
    <span
      className={`
      inline-flex items-center gap-1.5 px-2.5 py-0.5 
      rounded-full text-xs font-bold uppercase tracking-wider
      ${styles[variant]}
    `}
    >
      {children}
      {count !== undefined && (
        <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] min-w-[1.2em] text-center">
          {count}
        </span>
      )}
    </span>
  );
};
