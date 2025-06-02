import React from 'react';
import PricingCard from './PricingCard';

interface WhatsAppAutomationProps {
  isAnnual: boolean;
}

const WhatsAppAutomation: React.FC<WhatsAppAutomationProps> = ({ isAnnual }) => {
  const pricingPlans = [
    {
      title: 'Smart Replies Bot',
      monthlyPrice: 399,
      annualPrice: 4309,
      features: [
        'Auto-replies to common questions',
        'Working hours information',
        'Basic product inquiries',
        'Simple lead capture',
      ],
    },
    {
      title: 'Lead Gen Bot',
      monthlyPrice: 699,
      annualPrice: 7549,
      features: [
        'All Smart Replies features',
        'Advanced lead qualification',
        'Appointment scheduling',
        'Payment links',
        'Follow-up sequences',
      ],
      highlighted: true,
    },
    {
      title: 'Full AI Agent',
      monthlyPrice: 949,
      annualPrice: 10249,
      features: [
        'All Lead Gen Bot features',
        'Advanced AI conversation',
        'Full sales process automation',
        'Integration with your systems',
        'Custom workflows',
        '24/7 sales representative',
      ],
    },
  ];

  return (
    <section id="whatsapp-automation" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-green-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            📲 AI Chatbots That Close Deals for You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Turn your WhatsApp into a lead-closing machine — no staff needed.
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
              ctaText="🛒 Launch My WhatsApp Bot"
              category="whatsapp"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAutomation;