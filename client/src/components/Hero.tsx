import React from "react";
import { Button } from "./Button";
import { Link } from "@tanstack/react-router";
import heroPizzaImage from "../public/hero-pizza.png";

const Hero: React.FC = () => {
  return (
    <section className="px-4 pt-6 pb-10 md:pt-12 md:pb-16">
      <div className="mx-auto max-w-6xl md:flex md:items-center md:gap-12">
        <div className="md:flex-1">
          <h1 className="font-display text-display-md text-cosmic-space md:text-display-lg mb-4 md:leading-tight">
            Pizza That’s
            <br />
            Out of This World
          </h1>

          <p className="text-body text-cosmic-space/80 mb-6 max-w-md md:max-w-lg md:text-[17px]">
            Delivered at warp speed from our cosmic kitchen to your orbit.
          </p>

          <Button variant="primary">
            <Link to="/order">Order Now</Link>
          </Button>
        </div>

        {/* Food image */}
        <div className="md:flex md:flex-1 md:items-center md:justify-end">
          <img src={heroPizzaImage} alt="Hero pizza" className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
