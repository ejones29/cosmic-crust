import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-family-display text-lg transition-all active:scale-[0.98] hover:cursor-pointer focus-visible:outline-none";

  const variants: Record<Variant, string> = {
    primary:
      "bg-cosmic-gold text-cosmic-space shadow-card focus-visible:ring-2 ring-cosmic-gold",
    secondary:
      "bg-cosmic-beige text-cosmic-space shadow-card focus-visible:ring-2 ring-cosmic-gold",
    ghost:
      "bg-transparent text-cosmic-space hover:bg-cosmic-beige/20 focus-visible:ring-2 ring-cosmic-gold",
  };

  return (
    <button {...props} className={clsx(base, variants[variant], className)}>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
export default Button;
