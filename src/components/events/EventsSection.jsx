import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

// interface Event {
//   id: number;
//   title: string;
//   date: string;
//   time: string;
//   location: string;
//   description: string;
// }

const EventsSection = () => {
  // These are placeholder events. In a real application, these would come from an API
  const [events] = useState([
    {
      id: 1,
      title: "Caribbean Food Festival",
      date: "June 25, 2023",
      time: "12:00 PM - 8:00 PM",
      location: "Victoria Park, London",
      description: "Join us for a day of Caribbean cuisine, music, and culture at the annual Caribbean Food Festival."
    },
    {
      id: 2,
      title: "Street Food Market",
      date: "July 10, 2023",
      time: "5:00 PM - 10:00 PM",
      location: "Southbank Centre, London",
      description: "We'll be serving our delicious bokits at the Southbank Street Food Market every weekend in July."
    },
    {
      id: 3,
      title: "Cooking Workshop",
      date: "August 5, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Community Kitchen, Brixton",
      description: "Learn how to make your own bokits and agoulou in this hands-on cooking workshop led by our chef."
    }
  ]);

  return (
    <section id="events" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-section-gradient to-transparent"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-subtitle">Don't Miss Out</span>
          <h2 className="section-title text-center after:left-1/4 after:w-1/2">Upcoming Events</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group bg-card-gradient rounded-lg p-6 border border-caribbean-orange/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 pb-4 border-b border-caribbean-orange/10">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-caribbean-orange transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-start gap-3 mb-2">
                  <CalendarDays size={18} className="text-caribbean-orange mt-0.5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <Clock size={18} className="text-caribbean-orange mt-0.5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-caribbean-orange mt-0.5" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <p className="text-sm opacity-80 mb-4">{event.description}</p>
              
              <a href="#contact" className="inline-block font-medium text-caribbean-orange hover:text-caribbean-orange/80 transition-colors">
                Get more info →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto p-8 bg-caribbean-yellow/10 rounded-lg border border-caribbean-yellow/20 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">Want to book us for your event?</h3>
          <p className="mb-6">
            We provide catering services for private events, corporate functions, weddings, and more. 
            Contact us for more information about our catering services.
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;