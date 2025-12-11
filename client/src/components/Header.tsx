import { useContext } from "react";
import { CartContext } from "../contexts.tsx";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo.tsx";
import stardust from "../public/star-dust-texture.png";
export const Header: React.FC = () => {
  const [cart] = useContext(CartContext);
  return (
    <header className="bg-cosmic-space relative overflow-hidden text-white">
      {/* Stardust Layer (slow) */}
      <div
        className="animate-stardust pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${stardust})` }}
      />
      {/* Stardust Layer (fast) */}
      <div
        className="animate-stardust-fast pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: `url(${stardust})` }}
      />

      <div className="relative z-10 flex items-center justify-between px-4 py-4">
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
        </nav>
        <button className="relative">
          <span className="sr-only">Open cart</span>
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M3 3h2l3.6 12.59a1 1 0 001 .74h9a1 1 0 00.96-.74L22 6H6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Cart quantity badge */}
          <span className="bg-cosmic-orange absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold text-white">
            {cart.length}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
