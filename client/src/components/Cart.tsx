import { useCurrencyFormatter } from "../hooks/useCurrencyFormatter.tsx";

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
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
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 md:p-5"
            >
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
