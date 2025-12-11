import { useState, useEffect, useDebugValue } from "react";

interface Pizza {
  id: string;
  [key: string]: any;
}

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState<Pizza | null>(null);
  useDebugValue(pizzaOfTheDay ? pizzaOfTheDay.id : "Loading Pizza of the Day"); // helps scanability in hooks section of the component, in React DevTools

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
