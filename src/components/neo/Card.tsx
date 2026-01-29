import React, { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  footer,
  className = "",
  ...props
}) => {
  return (
    <div className={`paper-card p-6 flex flex-col ${className}`} {...props}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-bold text-[var(--ink-primary)]">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-[var(--ink-muted)] mt-1">{subtitle}</p>
          )}
        </div>
      )}

      <div className="flex-1">{children}</div>

      {footer && (
        <div className="mt-6 pt-4 border-t border-[var(--paper-dim)]">
          {footer}
        </div>
      )}
    </div>
  );
};
