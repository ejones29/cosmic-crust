import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div
      className={`relative flex items-center justify-center gap-2 ${className ?? ""}`}
    >
      <img
        src={"./src/public/logo-wordmark.png"}
        alt="Cosmic Crust Pizza Logo"
        {...props}
      />
    </div>
  );
};
