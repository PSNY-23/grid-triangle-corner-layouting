import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-semibold text-[var(--ink-secondary)] ml-1">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          className={`
            w-full px-4 py-2.5 
            paper-inset
            border-none outline-none 
            text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]
            focus:ring-2 focus:ring-[var(--teal-primary)] focus:bg-[var(--paper-light)]
            transition-all duration-200
            ${error ? "ring-2 ring-[var(--danger)]/50" : ""}
            ${className}
          `}
          {...props}
        />
      </div>

      {(error || helperText) && (
        <p
          className={`text-xs ml-1 ${error ? "text-[var(--danger)] font-medium" : "text-[var(--ink-muted)]"}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
