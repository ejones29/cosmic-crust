import React from "react";
import { Button } from "./Button";
import { Link } from "@tanstack/react-router";
import heroPizzaImage from "../public/hero-pizza.png";

const Hero: React.FC = () => {
  return (
    <section className="bg-cosmic-orange mb-5 px-6 pt-6 pb-10 md:mb-10 md:pt-12 md:pb-16">
      <div className="mx-auto max-w-6xl md:flex md:items-center md:gap-12">
        <div className="md:flex-1">
          <h1 className="text-cosmic-sand animate-fade-up mb-4 text-5xl leading-tight md:text-6xl">
            Pizza That’s Out of This World
          </h1>

          <p className="text-body text-cosmic-space/80 mb-6 max-w-md md:max-w-lg md:text-[17px]">
            Delivered at warp speed from our cosmic kitchen to your orbit.
          </p>

          <Button
            variant="secondary"
            className="w-full max-w-xs transition-shadow duration-300 hover:shadow-[0_0_18px_rgba(245,201,120,0.45)]"
          >
            <Link to="/order">Order Now</Link>
          </Button>
        </div>

        {/* Food image */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
          <img src={heroPizzaImage} alt="Hero pizza" className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
