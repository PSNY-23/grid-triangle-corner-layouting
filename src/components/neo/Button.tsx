import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "secondary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "paper-button inline-flex items-center justify-center cursor-pointer select-none";

  const variants = {
    primary: "primary text-white",
    secondary: "text-[var(--ink-primary)]",
    ghost:
      "bg-transparent shadow-none border-transparent hover:bg-[var(--paper-dim)]",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const combinedClassName = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
