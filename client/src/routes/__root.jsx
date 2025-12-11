import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StarsBackground from "../components/StarsBackground";
import Header from "../components/Header.tsx";

import { CartContext } from "../contexts.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const cartHook = useState([]);
  return (
    <>
      <CartContext.Provider value={cartHook}>
        <StarsBackground starCount={10000} />
        <div>
          <Header />
          <Outlet />
        </div>
      </CartContext.Provider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
