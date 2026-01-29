import React from "react";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  label,
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer gap-3">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div
          className={`
          w-11 h-6 rounded-full peer 
          bg-[var(--paper-dim)] 
          shadow-[var(--inner-shadow-1)]
          peer-focus:ring-2 peer-focus:ring-[var(--teal-primary)]
          peer-checked:bg-[var(--ink-primary)]
          peer-checked:after:bg-[var(--teal-primary)]
          peer-checked:after:translate-x-full
          after:content-[''] 
          after:absolute after:top-[2px] after:left-[2px] 
          after:bg-[var(--paper-raised)] 
          after:rounded-full after:h-5 after:w-5 
          after:transition-all 
          after:shadow-sm
        `}
        ></div>
      </div>
      {label && (
        <span className="text-sm font-medium text-[var(--ink-primary)] select-none">
          {label}
        </span>
      )}
    </label>
  );
};
