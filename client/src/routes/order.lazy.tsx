import { useEffect, useState, useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Container from "../components/Container.tsx";
import Cart from "../components/Cart.tsx";
import { CartContext } from "../contexts.tsx";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter.tsx";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  async function checkout() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    setCart([]);
    setLoading(false);
  }

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = useCurrencyFormatter(selectedPizza.sizes[pizzaSize]);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    const pizzasRes = await fetch("/api/pizzas");
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  function addToCart() {
    setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
  }

  return (
    <Container>
      <div className="space-y-10 py-10 md:py-14">
        {/* ------------------------------ */}
        {/* CREATE ORDER CARD */}
        {/* ------------------------------ */}
        <div className="bg-cosmic-sand rounded-card shadow-card flex flex-col gap-6 p-6 md:p-10">
          <h2 className="font-display text-display-sm text-cosmic-space">
            Create Your Order
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToCart();
            }}
            className="flex flex-col gap-8 md:flex-row md:items-start"
          >
            {/* LEFT FORM COLUMN */}
            <div className="flex-1 space-y-6">
              {/* Pizza Type */}
              <div className="space-y-2">
                <label
                  htmlFor="pizza-type"
                  className="text-cosmic-midnight-plum block text-sm font-semibold"
                >
                  Pizza Type
                </label>

                <select
                  onChange={(e) => setPizzaType(e.target.value)}
                  name="pizza-type"
                  value={pizzaType}
                  className="rounded-pill text-cosmic-space focus:ring-cosmic-orange w-1/2 border border-[#EEDCC8] bg-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:outline-none"
                >
                  {pizzaTypes.map((pizza) => (
                    <option key={pizza.id} value={pizza.id}>
                      {pizza.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pizza Size */}
              <div className="space-y-2">
                <label className="text-cosmic-midnight-plum block text-sm font-semibold">
                  Pizza Size
                </label>

                <div className="flex items-center gap-4">
                  {["S", "M", "L"].map((size) => (
                    <label
                      key={size}
                      className="text-cosmic-space flex items-center gap-2 text-sm font-medium"
                    >
                      <input
                        type="radio"
                        checked={pizzaSize === size}
                        value={size}
                        name="pizza-size"
                        className="text-cosmic-orange focus:ring-cosmic-orange h-4 w-4 border-[#EEDCC8]"
                        onChange={(e) => setPizzaSize(e.target.value)}
                      />
                      {size === "S"
                        ? "Small"
                        : size === "M"
                          ? "Medium"
                          : "Large"}
                    </label>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                type="submit"
                className="bg-cosmic-orange rounded-pill shadow-card px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#a94e1d] active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>

            {/* RIGHT — Selected Pizza Preview */}
            {loading ? (
              <p className="font-display text-cosmic-midnight-plum">Loading…</p>
            ) : (
              <div className="flex flex-col items-center gap-3 md:gap-4">
                <div className="rounded-card shadow-card h-80 w-full overflow-hidden">
                  <img
                    src={selectedPizza.image}
                    alt={selectedPizza.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-display text-cosmic-space text-lg">
                  {selectedPizza.name}
                </p>
                <p className="text-cosmic-space/80 text-sm">{price}</p>
              </div>
            )}
          </form>
        </div>

        {/* ------------------------------ */}
        {/* CART CARD */}
        {/* ------------------------------ */}
        {!loading && (
          <div className="bg-cosmic-sand rounded-card shadow-card p-6 md:p-10">
            <Cart cart={cart} setCart={setCart} checkout={checkout} />
          </div>
        )}
      </div>
    </Container>
  );
}
