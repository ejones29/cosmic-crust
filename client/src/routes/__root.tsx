import { useState, useEffect } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../components/Header.tsx";
import BottomNav from "../components/BottomNav.tsx";

import { CartContext } from "../contexts.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cosmicCrustCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cosmicCrustCart", JSON.stringify(cart));
  }, [cart]);

  const cartHook = [cart, setCart];

  return (
    <>
      <CartContext.Provider value={cartHook}>
        <div className="bg-cosmic-beige min-h-screen pb-24 font-sans md:pb-32">
          <Header />
          <Outlet />
          <BottomNav />
        </div>
      </CartContext.Provider>
      {/* <TanStackRouterDevtools /> */}
      {/* <ReactQueryDevtools /> */}
    </>
  );
}
