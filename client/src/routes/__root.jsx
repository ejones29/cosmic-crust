import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "../Header";
import PizzaOfTheDay from "../PizzaOfTheDay";
import { CartContext } from "../contexts";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Outlet />
        <PizzaOfTheDay />
      </div>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </React.Fragment>
  );
}
