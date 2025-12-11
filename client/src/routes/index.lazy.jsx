import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/Button.tsx";
import Hero from "../components/Hero.tsx";
import PizzaOfTheDay from "../components/PizzaOfTheDay.jsx";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-cosmic-beige flex min-h-screen flex-col font-sans">
      <Hero />
      <PizzaOfTheDay />
    </div>
    // <div className="index">
    //   <div className="index-brand">
    //     <h1 className="text-melted-cheese-orange font-bungee text-3xl">
    //       Cosmic Crust
    //     </h1>
    //     <p className="text-space-dust-white text-xl">
    //       Where every slice is outta this world.🍕✨
    //     </p>
    //   </div>
    //   <ul>
    //     <li>
    //       <Button variant="primary">
    //         <Link to="/order">Order Now</Link>
    //       </Button>
    //     </li>
    //     <li>
    //       <Button variant="secondary">
    //         <Link to="/past">Past Orders</Link>
    //       </Button>
    //     </li>
    //     <li>
    //       <Button variant="secondary">
    //         <Link to="/contact">Contact</Link>
    //       </Button>
    //     </li>
    //   </ul>
    // </div>
  );
}
