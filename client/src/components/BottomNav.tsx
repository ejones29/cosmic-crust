import React, { useContext } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { CartContext } from "../contexts";

// react-icons ex: https://react-icons.github.io/react-icons/search/#q=Pizza
import { HiHome } from "react-icons/hi";
import { FaReceipt, FaPizzaSlice } from "react-icons/fa";
// import { RiAccountCircleFill } from "react-icons/ri";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";

const NavItem = ({
  label,
  icon,
  to,
}: {
  label: string;
  icon: React.ReactNode;
  to: string;
}) => {
  const route = useRouterState().location.pathname;
  const isActive = route.startsWith(to);
  return (
    <Link
      to={to}
      className={`flex flex-col items-center text-xs font-medium transition ${isActive ? "text-cosmic-gold scale-105 drop-shadow-[0_0_6px_rgba(245,201,120,0.45)]" : "hover:text-cosmic-orange text-white/70"} `}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
};

const BottomNav: React.FC = () => {
  const [cart] = useContext(CartContext);

  return (
    <nav className="bg-cosmic-midnight-plum shadow-deep rounded-pill fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-sm -translate-x-1/2 justify-around px-2 py-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] md:hidden">
      <NavItem label="Home" icon={<HiHome />} to="/" />
      {/* <NavItem label="Menu" icon={<FaPizzaSlice />} to="/menu" /> */}
      <NavItem label="Order" icon={<FaReceipt />} to="/order" />
      <NavItem label="Contact" icon={<FiMessageCircle />} to="/contact" />
      {/* Cart with badge */}
      <NavItem
        label="Cart"
        icon={
          <div className="relative">
            <RiShoppingCart2Fill />
            {cart.length > 0 && (
              <span className="bg-cosmic-orange absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold text-white shadow-[0_0_4px_rgba(0,0,0,0.35)]">
                {cart.length}
              </span>
            )}
          </div>
        }
        to="/cart"
      />
    </nav>
  );
};

export default BottomNav;
