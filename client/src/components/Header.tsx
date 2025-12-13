import { useContext } from "react";
import { CartContext } from "../contexts.tsx";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo.tsx";
import cosmicStardustBg from "../public/cosmic-stardust-bg.webp";
import speckleTexture from "../public/speckle-texture.png";

export const Header: React.FC = () => {
  const [cart] = useContext(CartContext);
  return (
    <header className="bg-cosmic-midnight-plum relative overflow-hidden bg-cover bg-center bg-no-repeat text-white">
      {/* Background Layer */}
      <div
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: `url(${cosmicStardustBg})` }}
      />
      {/* Stardust Layer (slow) */}
      <div
        className="animate-stardust-slow pointer-events-none absolute inset-0 bg-size-[600px_600px] bg-center bg-repeat"
        style={{ backgroundImage: `url(${speckleTexture})` }}
      />
      {/* Stardust Layer (fast) */}
      <div
        className="animate-stardust-fast pointer-events-none absolute inset-0 bg-size-[500px_500px] bg-center bg-repeat"
        style={{ backgroundImage: `url(${speckleTexture})` }}
      />

      <div className="relative z-10 flex items-center justify-between px-4 py-4">
        <Link to={"/"} className="flex items-center justify-center">
          <Logo className="h-20 w-20 md:h-24 md:w-24" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white md:flex">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          <Link to="/order" className="nav-link">
            Order Now
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
