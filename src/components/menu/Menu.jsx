import MenuCard from "../menuCard/MenuCard";
import { Link } from "react-router-dom";
import triobokits from "@/assets/triobokit.jpg";
import sizes from "@/assets/sizes.jpg";
import saltfish from "@/assets/saltfish-bokit.jpg";
import chickenwings from "@/assets/chickenwings.jpg";

const Menu = () => {
  const menuItems = [
    {
      title: "Traditional Bokit",
      description:
        "Deep-fried dough filled with traditional Caribbean ingredients including chicken, pork or fish with fresh vegetables and spices.",
      imageUrl: saltfish,
    },
    {
      title: "Tasty Wings",
      description:
        "Grilled chicken wings tossed in our signature sweet and spicy sauce, delivering the perfect balance of heat and flavor.",
      imageUrl: chickenwings,
    },
    {
      title: "Trio Bokits",
      description:
        "Three different mini bokits in one serving, allowing customers to explore a range of flavors without having to choose just one.",
      imageUrl: sizes,
    },
    {
      title: "Petit Bokit",
      description:
        "Smaller versions of traditional bokits, perfect for those looking for a lighter snack or wanting to sample multiple flavors.",
      imageUrl: triobokits,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-caribbean-white to-transparent"></div>

      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Taste the Caribbean</span>
          <h2 className="section-title text-center after:left-1/4 after:w-1/2">
            Our Menu
          </h2>
          <p className="mt-6 max-w-2xl mx-auto">
            Discover the authentic flavors of Guadeloupe with our selection of
            traditional bokits. Each item is prepared with love using authentic
            recipes and fresh ingredients.
          </p>
        </div>
        <div className="flex justify-center">{/* <Gallery /> */}</div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-lg font-medium mb-8">
            Want to see more of our delicious offerings?
          </p>
          <Link to="/gallery" className="btn-primary">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
