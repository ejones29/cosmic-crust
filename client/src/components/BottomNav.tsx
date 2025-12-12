import React from "react";
import { Link } from "@tanstack/react-router"; // or replace with your router
import { HiHome } from "react-icons/hi";

import { FaStar, FaPizzaSlice } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
const BottomNav: React.FC = () => {
  return (
    <nav className="rounded-pill shadow-deep bg-cosmic-midnight-plum fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-sm -translate-x-1/2 justify-around py-3">
      <NavItem label="Home" icon={<HiHome />} to="/" />
      <NavItem label="Menu" icon={<FaPizzaSlice />} to="/menu" />
      <NavItem label="Deals" icon={<FaStar />} to="/deals" />
      <NavItem label="Account" icon={<RiAccountCircleFill />} to="/account" />
    </nav>
  );
};

const NavItem = ({
  label,
  icon,
  to,
}: {
  label: string;
  icon: React.ReactNode;
  to: string;
}) => (
  <Link
    to={to}
    className="text-cosmic-space/70 hover:text-cosmic-orange [&.active]:text-cosmic-orange flex flex-col items-center text-xs font-medium transition"
  >
    <span className="text-xl">{icon}</span>
    {label}
  </Link>
);
export default BottomNav;
