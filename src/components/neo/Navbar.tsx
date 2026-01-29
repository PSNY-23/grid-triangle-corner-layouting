import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Layers, Settings, User } from "lucide-react";

export const Navbar: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Components", path: "/components", icon: Layers },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="paper-card px-2 py-2 flex items-center gap-2 rounded-full shadow-[var(--shadow-3)]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300
              ${
                isActive
                  ? "text-[var(--teal-primary)] bg-[var(--paper-light)] shadow-[var(--inner-shadow-1)]"
                  : "text-[var(--ink-muted)] hover:text-[var(--ink-primary)] hover:bg-[var(--paper-raised)]"
              }
            `}
          >
            <item.icon size={16} strokeWidth={2.5} />
            <span className="hidden sm:inline">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
