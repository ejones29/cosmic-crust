import React from "react";
import { Button } from "./Button";
import { Link } from "@tanstack/react-router";

const Hero: React.FC = () => {
  return (
    <section className="from-cosmic-space to-cosmic-orange/90 text-cosmic-beige relative overflow-hidden bg-linear-to-b via-[#2C1748]">
      {/* subtle stars */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,213,107,0.25),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(255,122,41,0.25),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-6 pb-16 md:flex-row md:items-center md:pt-10 md:pb-24">
        {/* Left content */}
        <div className="z-10 flex-1">
          <p className="text-cosmic-gold/80 mb-3 text-xs tracking-[0.25em] uppercase">
            Intergalactic Pizza Fleet
          </p>
          <h1 className="text-cosmic-beige text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl">
            Pizza That’s
            <br />
            <span className="text-cosmic-gold">Out of This World</span>
          </h1>
          <p className="text-cosmic-beige/80 mt-4 max-w-md text-sm md:text-base">
            Delivered at warp speed across the cosmic frontier. Customize your
            pie and track it from launchpad to landing.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button variant="primary">
              <Link to="/order">Order Now</Link>
            </Button>
          </div>

          <p className="text-cosmic-beige/70 mt-4 text-xs">
            No third-party black holes. Just pure flavor orbits.
          </p>
        </div>

        <div className="relative flex-1 items-center justify-center md:flex">
          <div className="from-cosmic-gold to-cosmic-orange/90 shadow-cosmic-soft relative mt-4 h-64 w-64 max-w-xs rounded-full bg-linear-to-br md:h-80 md:w-80">
            {/* Add Astronaut illustration here when ready */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
