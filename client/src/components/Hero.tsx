import React from "react";
import { Button } from "./Button";
import { Link } from "@tanstack/react-router";
import heroPizzaImage from "../public/hero-pizza.png";

const Hero: React.FC = () => {
  return (
    <section className="bg-cosmic-orange relative mb-5 min-h-[30vh] overflow-hidden px-6 pt-10 pb-16 md:mb-10 md:pt-16 md:pb-20 lg:mb-16 lg:pt-24 lg:pb-24">
      {/* Background Pizza Image */}
      <img
        src={heroPizzaImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[-20%] right-[-60%] w-[140%] max-w-none opacity-50 sm:top-[-50%] md:top-[-25%] md:right-[-40%] md:w-full lg:top-[-40%] lg:right-[-20%] lg:w-[80%] lg:opacity-70"
      />

      {/* soft gradient for readability */}
      <div className="to-cosmic-orange/30 pointer-events-none absolute inset-0 bg-linear-to-b from-transparent"></div>

      <div className="relative z-10 mx-auto flex min-h-[30vh] max-w-6xl items-center md:gap-12">
        <div className="absolute top-0 left-0 z-0 h-[680px] w-[680px] translate-x-[-25%] translate-y-[-20%] rounded-full bg-[radial-gradient(circle,rgba(255,180,70,0.35)_0%,rgba(255,180,70,0)_60%)] opacity-50 blur-3xl" />
        <div className="relative flex h-full max-w-lg flex-col self-center md:flex-1 md:items-start">
          <h1 className="text-cosmic-beige animate-fade-up mb-4 text-5xl leading-tight md:text-6xl">
            Pizza That’s Out of This World
          </h1>

          <p className="text-body text-cosmic-beige mb-6 max-w-md md:max-w-lg md:text-[17px]">
            Delivered at warp speed from our cosmic kitchen to your orbit.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <Button
              variant="primary"
              className="transition-shadow duration-300 hover:shadow-[0_0_18px_rgba(245,201,120,0.45)]"
            >
              <Link to="/order">Start Your Order</Link>
            </Button>

            <Button
              variant="secondary"
              className="transition-shadow duration-300 hover:shadow-[0_0_18px_rgba(245,201,120,0.45)]"
            >
              <Link to="/past">View Past Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
