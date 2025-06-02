import React from 'react';
import PricingCard from './PricingCard';

interface MessengerAutomationProps {
  isAnnual: boolean;
}

const MessengerAutomation: React.FC<MessengerAutomationProps> = ({ isAnnual }) => {
  const pricingPlans = [
    {
      title: 'Basic Chatbot',
      monthlyPrice: 349,
      annualPrice: 3769,
      features: [
        'Auto-replies to messages',
        'FAQ responses',
        'Business hours info',
        'Simple menu options',
      ],
    },
    {
      title: 'Lead Funnel Bot',
      monthlyPrice: 649,
      annualPrice: 7009,
      features: [
        'All Basic Chatbot features',
        'Lead qualification questions',
        'Appointment booking',
        'Product recommendations',
        'Follow-up messages',
      ],
      highlighted: true,
    },
    {
      title: 'Messenger AI Pro',
      monthlyPrice: 899,
      annualPrice: 9709,
      features: [
        'All Lead Funnel Bot features',
        'Advanced AI conversations',
        'Complex sales workflows',
        'Payment processing',
        'CRM integration',
        'Analytics dashboard',
      ],
    },
  ];

  return (
    <section id="messenger-automation" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-blue-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            💬 Auto-Reply. Auto-Book. Auto-Sell.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let Messenger close leads and handle support even while you sleep.
          </p>
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
              ctaText="🛒 Launch My Messenger System"
              category="messenger"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessengerAutomation;