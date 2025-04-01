import MenuCard from '../menuCard/MenuCard';

const Menu = () => {
  const menuItems = [
    {
      title: "Traditional Bokit",
      description: "Deep-fried dough filled with traditional Caribbean ingredients including chicken, pork or fish with fresh vegetables and spices.",
      imageUrl: "",
    },
    {
      title: "Agoulou",
      description: "A delicious brioche-like bread filled with meats such as sausages, mince, or chicken, topped with cheese and special sauces, grilled like a panini.",
      imageUrl: "",
    },
    {
      title: "Trio Bokits",
      description: "Three different mini bokits in one serving, allowing customers to explore a range of flavors without having to choose just one.",
      imageUrl: "",
    },
    {
      title: "Petit Bokit",
      description: "Smaller versions of traditional bokits, perfect for those looking for a lighter snack or wanting to sample multiple flavors.",
      imageUrl: "",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-caribbean-white to-transparent"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-subtitle">Taste the Caribbean</span>
          <h2 className="section-title text-center after:left-1/4 after:w-1/2">Our Menu</h2>
          <p className="mt-6 max-w-2xl mx-auto">
            Discover the authentic flavors of Guadeloupe with our selection of traditional bokits and agoulou. Each item is prepared with love using authentic recipes and fresh ingredients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
