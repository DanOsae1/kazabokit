import { useState,useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import useNewsLetterForm from '@/hooks/emailHook/useNewsLetter';
import { useToast } from "@/components/toast/Toast";


const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {} = useNewsLetterForm();

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real application, this would send a request to your backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      toast.success("Thank you for subscribing to our newsletter!");
    }, 1500);
  };

  return (
    <section className="py-16 bg-caribbean-orange relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-block text-sm uppercase tracking-wider text-white/80 font-medium mb-3">
            Stay Updated
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8 opacity-90">
            Sign up to receive updates on our newest menu items, upcoming events, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="flex-grow relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-caribbean-black"
                disabled={isSubmitting || isSubscribed}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-white text-caribbean-orange font-medium rounded-lg transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50 whitespace-nowrap disabled:opacity-70"
              disabled={isSubmitting || isSubscribed}
            >
              {isSubmitting ? (
                "Subscribing..."
              ) : isSubscribed ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle size={18} />
                  Subscribed
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={18} />
                  Subscribe
                </span>
              )}
            </button>
          </form>
          
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;