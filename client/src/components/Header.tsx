import React from "react";
import { useContext } from "react";
import { CartContext } from "../contexts.tsx";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo.tsx";

export const Header: React.FC = () => {
  const [cart] = useContext(CartContext);
  return (
    <header className="border-cosmic-space/60 bg-cosmic-space/90 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
        <Link to={"/"} className="flex items-center justify-center">
          <Logo className="h-24 w-24" />
        </Link>
        <nav className="text-cosmic-beige/80 hidden items-center gap-6 text-sm md:flex">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          <Link to="/order" className="nav-link">
            Order
          </Link>
          <Link to="/past" className="nav-link">
            Past Orders
          </Link>
          <div className="nav-cart">
            🍕<span className="nav-cart-number">{cart.length}</span>
          </div>
        </nav>
        {/* Mobile nav stub */}
        {/* <button className="border-cosmic-beige/30 text-cosmic-beige flex h-9 w-9 items-center justify-center rounded-full border md:hidden">
          <span className="sr-only">Open navigation</span>
          <div className="space-y-1.5">
            <span className="bg-cosmic-beige block h-0.5 w-4" />
            <span className="bg-cosmic-beige block h-0.5 w-4" />
          </div>
        </button> */}
      </div>
    </header>
  );
};

export default Header;
