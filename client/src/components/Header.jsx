import { useContext } from "react";
import { CartContext } from "../contexts";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <div className="nav-logo">
        <Link to={"/"}>
          <span className="logo">🍕</span>
          <h1 className="text-melted-cheese-orange font-bungee text-3xl">
            Cosmic Crust Pizza
          </h1>
        </Link>
      </div>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
