import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Coming Soon</div>;
}
