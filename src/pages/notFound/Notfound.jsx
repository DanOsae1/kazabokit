import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-section-gradient p-4">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="w-24 h-24 bg-caribbean-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl font-display font-bold text-caribbean-orange">404</span>
        </div>
        <h1 className="text-2xl font-display font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <Home size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;