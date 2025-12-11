import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cosmic-gold focus-visible:ring-offset-cosmic-space";

  const variants: Record<Variant, string> = {
    primary:
      "bg-cosmic-orange text-cosmic-space hover:bg-[#ff8c3f] shadow-cosmic-soft",
    secondary:
      "bg-transparent border border-cosmic-beige text-cosmic-beige hover:bg-white/5",
    ghost:
      "bg-transparent text-cosmic-beige/80 hover:text-white hover:bg-white/5",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
