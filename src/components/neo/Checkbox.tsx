import React from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer group">
      <div className="relative w-5 h-5">
        <input type="checkbox" className="peer sr-only" {...props} />
        <div
          className={`
          w-5 h-5 rounded 
          bg-[var(--paper-base)] 
          shadow-[var(--inner-shadow-1)]
          border border-transparent
          peer-checked:bg-[var(--teal-primary)] 
          peer-checked:shadow-[var(--shadow-1)]
          transition-all duration-200
          flex items-center justify-center
        `}
        >
          <Check
            size={14}
            className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
            strokeWidth={3}
          />
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-[var(--ink-secondary)] group-hover:text-[var(--ink-primary)]">
          {label}
        </span>
      )}
    </label>
  );
};
