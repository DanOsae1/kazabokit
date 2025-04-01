import { useState } from 'react';

// interface MenuCardProps {
//   title: string;
//   description: string;
//   imageUrl?: string;
//   delay: number;
// }

const MenuCard = ({ title, description, imageUrl, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-lg overflow-hidden bg-white shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-3 text-caribbean-black">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;