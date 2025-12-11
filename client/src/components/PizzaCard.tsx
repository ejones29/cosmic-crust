import React from "react";

export interface Pizza {
  id: string;
  name: string;
  tagline: string;
  planet: string;
}

interface CardPizzaProps {
  pizza: Pizza;
}

export const CardPizza: React.FC<CardPizzaProps> = ({ pizza }) => {
  return (
    <article className="bg-cosmic-card bg-cosmic-grain hover:shadow-cosmic-soft flex flex-col rounded-3xl p-4 shadow-md transition hover:-translate-y-1">
      <div className="from-cosmic-gold/70 to-cosmic-orange/80 mb-3 flex h-24 w-full items-center justify-center rounded-2xl bg-gradient-to-br">
        {/* Placeholder “pizza” disc */}
        <div className="bg-cosmic-beige relative h-16 w-16 rounded-full">
          <div className="bg-cosmic-orange/25 absolute inset-2 rounded-full" />
          <span className="bg-cosmic-orange absolute top-3 left-3 h-3 w-3 rounded-full" />
          <span className="bg-cosmic-orange absolute top-4 right-4 h-3 w-3 rounded-full" />
          <span className="bg-cosmic-orange absolute bottom-4 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full" />
        </div>
      </div>

      <h3 className="text-cosmic-space text-base font-semibold">
        {pizza.name}
      </h3>
      <p className="text-cosmic-space/80 mt-1 text-xs">{pizza.tagline}</p>
      <p className="text-cosmic-plum mt-2 text-[11px] font-medium tracking-wide uppercase">
        Popular on {pizza.planet}
      </p>
    </article>
  );
};
