import { usePizzaOfTheDay } from "../hooks/usePizzaOfTheDay.tsx";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter.tsx";
import { Link } from "@tanstack/react-router";
import Button from "./Button.tsx";

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-card bg-cosmic-sand shadow-card mx-auto max-w-6xl p-6 md:flex md:items-center md:gap-10 md:p-10">
      <div className="flex-1">
        {/* Badge */}
        <span className="bg-cosmic-midnight-plum rounded-pill animate-fade-up mb-4 inline-block px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase opacity-0">
          Pizza of the Day
        </span>
        <h2 className="text-cosmic-midnight-plum mb-1 text-2xl">
          {pizzaOfTheDay.name}
        </h2>
        <p className="text-body text-cosmic-space/80 mb-4 max-w-md">
          {pizzaOfTheDay.description}
        </p>
        <p className="text-body text-cosmic-midnight-plum mb-6">
          From: <span>{useCurrencyFormatter(pizzaOfTheDay.sizes.S)}</span>
        </p>
        <Button className="w-full max-w-xs transition-shadow duration-300 hover:shadow-[0_0_18px_rgba(245,201,120,0.45)]">
          <Link to="/order">Order Now</Link>
        </Button>
      </div>
      <div className="mt-8 flex flex-1 justify-center md:mt-0">
        <img
          className="h-full w-full rounded-xs object-contain md:h-80 md:w-80"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
