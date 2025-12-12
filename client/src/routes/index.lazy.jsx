import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Hero from "../components/Hero.tsx";
import Container from "../components/Container.tsx";
import Section from "../components/Section.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import CardCategory from "../components/CardCategory.tsx";
import PizzaOfTheDay from "../components/PizzaOfTheDay.jsx";
import CardPizza from "../components/CardPizza.tsx";
import BottomNav from "../components/BottomNav.tsx";
import supernova from "./../public//hero-pizza.png";
import { FaPizzaSlice } from "react-icons/fa6";
import { TbSaladFilled } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaIceCream } from "react-icons/fa";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Container>
        <Section>
          <SectionHeader title="Pizza of the Day" />
          <PizzaOfTheDay />
        </Section>

        <Section>
          <SectionHeader title="Explore Our Menu" />
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <CardCategory emoji={<FaPizzaSlice />} label="Pizza" />
            <CardCategory emoji={<TbSaladFilled />} label="Salads" />
            <CardCategory emoji={<RiDrinks2Fill />} label="Drinks" />
            <CardCategory emoji={<FaIceCream />} label="Desserts" />
          </div>
        </Section>

        <Section>
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
        </Section>
      </Container>
      <BottomNav />
    </>
  );
}
