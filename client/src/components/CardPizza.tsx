import React from "react";

interface CardPizzaProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const CardPizza: React.FC<CardPizzaProps> = ({
  name,
  description,
  price,
  image,
}) => (
  <article className="rounded-card shadow-card hover:shadow-deep bg-cosmic-sand p-3 transition md:p-4">
    <img
      src={image}
      alt={name}
      className="rounded-card mb-3 h-40 w-full object-cover md:h-80"
    />

    <h3 className="font-display text-cosmic-space text-lg">{name}</h3>
    <p className="text-cosmic-space/70 font-sans text-sm">{description}</p>

    <p className="text-cosmic-midnight-plum mt-2 font-sans text-sm font-semibold">
      {price}
    </p>
  </article>
);
export default CardPizza;
