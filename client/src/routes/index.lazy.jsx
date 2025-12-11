import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Hero from "../components/Hero.tsx";
import Container from "../components/Container.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import CardCategory from "../components/CardCategory.tsx";
import PizzaOfTheDay from "../components/PizzaOfTheDay.jsx";
import CardPizza from "../components/CardPizza.tsx";
import BottomNav from "../components/BottomNav.tsx";
import supernova from "./../public//hero-pizza.png";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Container>
        <PizzaOfTheDay />
      </Container>
      <Container>
        <SectionHeader title="Explore Our Menu" />

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <CardCategory emoji="🍕" label="Pizza" />
          <CardCategory emoji="🥗" label="Salads" />
          <CardCategory emoji="🥤" label="Drinks" />
          <CardCategory emoji="🍪" label="Desserts" />
        </div>
      </Container>
      <Container>
        <SectionHeader title="Popular Pizzas" />

        <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <CardPizza
            name="Supernova Supreme"
            description="Explosive flavors on an orbiting crust."
            price="$15.99"
            image={supernova}
          />

          <CardPizza
            name="Meteor Margherita"
            description="Classic margherita with meteor-roasted tomatoes."
            price="$13.49"
            image={supernova}
          />

          <CardPizza
            name="Galactic Veggie"
            description="A constellation of fresh veggies and cosmic herbs."
            price="$14.79"
            image={supernova}
          />
        </div>
      </Container>
      <BottomNav />
    </>
  );
}
