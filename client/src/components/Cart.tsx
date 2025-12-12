import { useState } from "react";
import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter.tsx";

type CartItem = {
  pizza: { name: string; image: string; sizes: { [key: string]: number } };
  size: string;
};

export default function Cart({
  cart,
  setCart,
  checkout,
}: {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  checkout: () => void;
}) {
  const [removingIndex, setRemovingIndex] = useState<number | null>(null);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  function removeItem(index: number): void {
    setRemovingIndex(index);

    setTimeout(() => {
      const copy = [...cart];
      copy.splice(index, 1);
      setCart(copy);
      setRemovingIndex(null);
    }, 250); // sync with animation
  }

  const hasItems = cart.length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="font-display text-display-sm text-cosmic-space">Cart</h2>

      {/* Empty Cart */}
      {!hasItems && (
        <p className="text-cosmic-space/70 text-sm">
          Your cart is empty. Add a pizza to begin your order!
        </p>
      )}

      {/* Cart Items */}
      {hasItems && (
        <ul className="rounded-card shadow-card divide-y divide-[#e8d8c4] bg-white">
          {cart.map((item: CartItem, index: number) => (
            <li
              key={index}
              className={`flex items-center justify-between gap-4 p-4 md:p-5 ${removingIndex === index ? "animate-cart-remove" : ""} `}
            >
              {/* Left section: image + details */}
              <div className="flex items-center gap-4">
                {/* Thumbnail */}
                <div className="rounded-card shadow-card h-14 w-14 overflow-hidden">
                  <img
                    src={item.pizza.image}
                    alt={item.pizza.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <p className="text-cosmic-space text-sm font-semibold">
                    {item.pizza.name}{" "}
                    <span className="text-cosmic-space/70 text-xs">
                      ({item.size})
                    </span>
                  </p>

                  <p className="text-cosmic-space/70 text-sm">
                    {useCurrencyFormatter(item.pizza.sizes[item.size])}
                  </p>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(index)}
                className="text-cosmic-midnight-plum hover:text-cosmic-orange text-xs underline transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      {hasItems && (
        <p className="text-cosmic-space flex items-center justify-between pt-2 text-sm font-semibold">
          <span>Total:</span>
          <span className="font-display text-lg">
            {useCurrencyFormatter(total)}
          </span>
        </p>
      )}

      {/* Checkout Button */}
      {hasItems && (
        <button
          onClick={checkout}
          className="bg-cosmic-orange rounded-pill shadow-card w-full py-3 text-sm font-medium text-white transition-all hover:bg-[#a94e1d] active:scale-[0.98]"
        >
          Checkout
        </button>
      )}
    </div>
  );
}
