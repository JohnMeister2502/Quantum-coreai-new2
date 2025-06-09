import React from 'react';
import PricingCard from './PricingCard';

interface WebDevelopmentProps {
  isAnnual: boolean;
}

const WebDevelopment: React.FC<WebDevelopmentProps> = ({ isAnnual }) => {
  const pricingPlans = [
    {
      title: 'Starter Site',
      monthlyPrice: 499,
      annualPrice: 5389,
      features: [
        'Mobile + desktop responsive',
        'WhatsApp integration',
        'Booking/contact forms',
        'Speed & SEO optimization',
      ],
    },
    {
      title: 'Pro Business Site',
      monthlyPrice: 749,
      annualPrice: 8089,
      features: [
        'Mobile + desktop responsive',
        'WhatsApp integration',
        'Booking/contact forms',
        'Funnel-style design',
        'Speed & SEO optimization',
        'Custom animations',
      ],
      highlighted: true,
    },
    {
      title: 'Ecommerce Engine',
      monthlyPrice: 1099,
      annualPrice: 11869,
      features: [
        'Mobile + desktop responsive',
        'WhatsApp integration',
        'Booking/contact forms',
        'Funnel-style design',
        'Speed & SEO optimization',
        'Custom animations',
        'Full product catalog',
        'Payment processing',
      ],
    },
  ];

  return (
    <section id="web-development" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-indigo-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            🖥️ Websites That Sell While You Sleep
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Futuristic, mobile-first, lightning-fast sites that look elite and convert hard.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
              isAnnual={isAnnual}
              features={plan.features}
              highlighted={plan.highlighted}
              ctaText="🛒 Build My Site Now"
              category="web"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;