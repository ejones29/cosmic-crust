import { useContext } from "react";
import { CartContext } from "../contexts.tsx";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo.tsx";
import cosmicStardustBg from "../public/cosmic-stardust-bg.webp";
import speckleTexture from "../public/speckle-texture.png";

export const Header: React.FC = () => {
  const [cart] = useContext(CartContext);
  return (
    <header className="bg-cosmic-midnight-plum sticky top-0 z-50 flex items-center justify-between overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-4 text-white backdrop-blur-md">
      {/* Background Layer */}
      <div
        className="absolute inset-0 opacity-50"
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

      <div className="relative z-10 flex w-full items-center gap-8">
        {/* Left: Logo */}
        <Link to={"/"} className="flex items-center">
          <Logo className="h-12 w-12 md:h-16 md:w-16" />
        </Link>

        {/* Center nav (desktop only) */}
        <nav className="hidden items-center gap-8 text-sm text-white md:flex">
          <Link
            to="/menu"
            className="text-white/85 transition-colors hover:text-white hover:drop-shadow-[0_0_6px_rgba(245,201,120,0.55)]"
          >
            Menu
          </Link>
          <Link
            to="/order"
            className="text-white/85 transition-colors hover:text-white hover:drop-shadow-[0_0_6px_rgba(245,201,120,0.55)]"
          >
            Order
          </Link>
          <Link
            to="/past"
            className="text-white/85 transition-colors hover:text-white hover:drop-shadow-[0_0_6px_rgba(245,201,120,0.55)]"
          >
            Past Orders
          </Link>
        </nav>
        {/* Right: Cart Icon */}
        <div className="ml-auto flex items-center">
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
      </div>
    </header>
  );
};

export default Header;
