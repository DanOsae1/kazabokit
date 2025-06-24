import foodItems from "@/assets/fooditems.jpg";
import { Users, Utensils } from "lucide-react";

const AboutUsSection = () => {
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
            Kaz A Bokit is a family-run food venture dedicated to sharing the
            rich, soulful flavours of Guadeloupe with curious eaters across the
            UK and beyond. Our journey began in 2018, when a visit to Guadeloupe
            by our younger brother became more than just a trip — it was a
            rediscovery of roots, rhythm, and flavour. What started as personal
            inspiration quickly became a family mission: to celebrate and
            reimagine a beloved Guadeloupean classic, the Bokit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="bg-card-gradient p-6 rounded-lg border border-caribbean-orange/10 shadow-sm transform transition-transform hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold flex items-center gap-3 mb-3">
                  <Users className="text-caribbean-orange" />
                  <span>Family-Owned Business</span>
                </h3>
                <p>
                  At Kaz A Bokit, we honour tradition while embracing
                  creativity, offering a menu that blends authenticity with
                  accessibility. Whether you're new to Caribbean cuisine or
                  seeking a taste of home, we invite you to experience something
                  heartfelt, handmade, and deeply flavourful.
                </p>
              </div>

              <div className="bg-card-gradient p-6 rounded-lg border border-caribbean-orange/10 shadow-sm transform transition-transform hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold flex items-center gap-3 mb-3">
                  <Utensils className="text-caribbean-orange" />
                  <span>Bokit: A delightful Guadeloupean Dish</span>
                </h3>
                <p>
                  A Bokit is more than just food — it's a symbol of Guadeloupe's
                  ingenuity and warmth. Made with golden, hand-crafted dough
                  that's lightly fried and filled with slow-cooked meats, fresh
                  vegetables, and bold, homemade sauces, every bite tells a
                  story.
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
                loading="lazy"
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

export default AboutUsSection;
