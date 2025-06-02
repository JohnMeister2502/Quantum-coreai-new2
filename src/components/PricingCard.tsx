import React from 'react';

interface PricingCardProps {
  title: string;
  price: number;
  isAnnual: boolean;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  category: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  isAnnual,
  features,
  highlighted = false,
  ctaText,
  category,
}) => {
  // Format price to ZAR currency with no decimals
  const formattedPrice = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  // Define different color schemes based on the category
  const getColors = () => {
    switch(category) {
      case 'web':
        return {
          gradientFrom: 'from-cyan-500',
          gradientTo: 'to-blue-500',
          shadow: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
          border: 'border-cyan-500/30',
        };
      case 'whatsapp':
        return {
          gradientFrom: 'from-green-500',
          gradientTo: 'to-emerald-500',
          shadow: 'shadow-green-500/20 hover:shadow-green-500/40',
          border: 'border-green-500/30',
        };
      case 'messenger':
        return {
          gradientFrom: 'from-blue-500',
          gradientTo: 'to-cyan-500',
          shadow: 'shadow-blue-500/20 hover:shadow-blue-500/40',
          border: 'border-blue-500/30',
        };
      case 'email':
        return {
          gradientFrom: 'from-purple-500',
          gradientTo: 'to-pink-500',
          shadow: 'shadow-purple-500/20 hover:shadow-purple-500/40',
          border: 'border-purple-500/30',
        };
      case 'video':
        return {
          gradientFrom: 'from-pink-500',
          gradientTo: 'to-red-500',
          shadow: 'shadow-pink-500/20 hover:shadow-pink-500/40',
          border: 'border-pink-500/30',
        };
      default:
        return {
          gradientFrom: 'from-cyan-500',
          gradientTo: 'to-blue-500',
          shadow: 'shadow-cyan-500/20 hover:shadow-cyan-500/40',
          border: 'border-cyan-500/30',
        };
    }
  };

  const colors = getColors();

  return (
    <div 
      className={`relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 ${
        highlighted 
          ? `bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl border-2 ${colors.border} shadow-xl` 
          : 'bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 py-1 bg-gradient-to-r text-center text-white text-xs font-bold tracking-wider">
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} opacity-90`}></div>
          <span className="relative">MOST POPULAR</span>
        </div>
      )}

      <div className={`px-6 pt-${highlighted ? '8' : '6'} pb-6`}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold text-white">{formattedPrice}</span>
            <span className="ml-1 text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
          </div>
          {isAnnual && (
            <p className="text-sm text-green-400 mt-1">Save 10% with annual billing</p>
          )}
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-400 mr-2">✔️</span>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full px-4 py-3 rounded-lg bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} text-white font-bold hover:opacity-90 transition-all duration-300 shadow-lg ${colors.shadow}`}
        >
          {ctaText}
        </button>
      </div>
      
      {/* Animated border effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradientFrom} ${colors.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
    </div>
  );
};

export default PricingCard;