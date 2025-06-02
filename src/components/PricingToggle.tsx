import React from 'react';

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-lg border-t border-gray-800 py-4 px-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-4">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
            🔘 Monthly
          </span>
          
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
            style={{ 
              backgroundColor: isAnnual ? 'rgba(52, 211, 153, 0.8)' : 'rgba(107, 114, 128, 0.8)'
            }}
          >
            <span 
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </button>
          
          <span className={`text-sm font-medium ${isAnnual ? 'text-green-400' : 'text-gray-400'}`}>
            ✅ Annual Billing (Save 10%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingToggle;