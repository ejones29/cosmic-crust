import { usePizzaOfTheDay } from "../hooks/usePizzaOfTheDay.tsx";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter.tsx";
import Pizza from "./Pizza";

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-cosmic-beige py-10 md:py-18">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 md:flex-row md:justify-between md:gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-cosmic-plum mb-6 text-lg font-semibold md:text-2xl">
            Pizza of the Day
          </h2>
          <div>
            <h3 className="text-cosmic-plum mb-1 text-2xl">
              {pizzaOfTheDay.name}
            </h3>
            <p className="text-cosmic-plum">{pizzaOfTheDay.description}</p>
            <p className="text-cosmic-plum mt-2 text-sm">
              From: <span>{useCurrencyFormatter(pizzaOfTheDay.sizes.S)}</span>
            </p>
          </div>
        </div>
        <div>
          <img
            className="shadow-cosmic-soft mt-4 max-h-64 w-auto rounded-2xl md:mt-0 md:max-h-80"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />
        </div>
      </div>
    </section>
  );
};

export default PizzaOfTheDay;
