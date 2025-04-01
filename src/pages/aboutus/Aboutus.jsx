import foodItems from "@/assets/fooditems.jpg"
import { Award, Users, Utensils } from 'lucide-react';

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-section-gradient relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title text-center after:left-1/4 after:w-1/2">
            About Us
          </h2>
          <p className="mt-8 text-lg opacity-90">
            We are a family run business from Guadeloupe. Our concept was
            inspired and drawn after a trip to Guadeloupe in 2018 by our younger
            brother who has sparked this venture, making us pioneer as the
            second bokit vendors in the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="bg-card-gradient p-6 rounded-lg border border-caribbean-orange/10 shadow-sm transform transition-transform hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold flex items-center gap-3 mb-3">
                  <Utensils className="text-caribbean-orange" />
                  <span>Bokit: A delightful Guadeloupean Dish</span>
                </h3>
                <p>
                  Bokits are beloved street food and a culinary staple from
                  Guadeloupe. These delectable sandwich-like creations typically
                  consist of deep-fried dough, which is light and fluffy and
                  serves as the vessel for variety of fillings. The fillings can
                  range from traditional ingredients like salted fish, chicken
                  or pork to vegetarian options that feature fresh vegetables
                  and spices.
                </p>
              </div>

              <div className="bg-card-gradient p-6 rounded-lg border border-caribbean-orange/10 shadow-sm transform transition-transform hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold flex items-center gap-3 mb-3">
                  <Award className="text-caribbean-orange" />
                  <span>Agoulou: A flavourful addition</span>
                </h3>
                <p>
                  Agoulou is another delicacy that hails from the Caribbean
                  particularly popular in Guadeloupe. This dish is made using
                  flour, eggs, butter, yeast, milk & sugar, resulting in a
                  brioche like bread. It is usually filled with various meats
                  such sausages, mince, chicken, topped with cheese and sauces
                  and grilled pressed like a panini sandwich.
                </p>
              </div>

              <div className="bg-card-gradient p-6 rounded-lg border border-caribbean-orange/10 shadow-sm transform transition-transform hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold flex items-center gap-3 mb-3">
                  <Users className="text-caribbean-orange" />
                  <span>Family-Owned Business</span>
                </h3>
                <p>
                  The incorporation of a Jamaican twist to our menu adds a
                  unique flavour that appeals to a diverse audience. This is a
                  great way to share the rich culinary heritage of the
                  Caribbean, while also appealing to local tastes.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-caribbean-orange/10 rounded-2xl blur-xl"></div>
              <img
                src={foodItems}
                alt="Kaz A Bokit Food Spread"
                className="rounded-2xl shadow-2xl relative z-10 w-full h-full max-w-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-caribbean-yellow rounded-full flex items-center justify-center z-20 shadow-lg scale-in-center">
                <span className="font-display font-bold text-caribbean-black text-center leading-tight">
                  Authentic
                  <br />
                  Caribbean
                  <br />
                  Flavor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;