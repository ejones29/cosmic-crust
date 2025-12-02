import { useContext } from "react";
import { CartContext } from "../contexts";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <div className="nav-logo">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="flex items-center justify-center">
            <span className="mr-4 text-3xl">🛸</span>
            <h1 className="text-melted-cheese-orange font-bungee px-2.5 text-3xl">
              Cosmic Crust Pizza
            </h1>
            <span className="ml-4 text-3xl">🛸</span>
          </Link>
        </div>
      </div>
      <div className="nav-cart">
        🍕<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
