import React from "react";
import { Link } from "@tanstack/react-router"; // or replace with your router

const BottomNav: React.FC = () => {
  return (
    <nav className="rounded-pill shadow-deep fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-sm -translate-x-1/2 justify-around bg-white py-3">
      <NavItem label="Home" icon="🏠" to="/" />
      <NavItem label="Menu" icon="🍕" to="/menu" />
      <NavItem label="Deals" icon="⭐" to="/deals" />
      <NavItem label="Account" icon="👤" to="/account" />
    </nav>
  );
};

const NavItem = ({
  label,
  icon,
  to,
}: {
  label: string;
  icon: string;
  to: string;
}) => (
  <Link
    to={to}
    className="text-cosmic-space/70 hover:text-cosmic-plum [&.active]:text-cosmic-plum flex flex-col items-center text-xs font-medium transition"
  >
    <span className="text-lg">{icon}</span>
    {label}
  </Link>
);
export default BottomNav;
