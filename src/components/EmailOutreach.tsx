import React from 'react';
import PricingCard from './PricingCard';

interface EmailOutreachProps {
  isAnnual: boolean;
}

const EmailOutreach: React.FC<EmailOutreachProps> = ({ isAnnual }) => {
  const pricingPlans = [
    {
      title: 'Basic Outreach',
      monthlyPrice: 499,
      annualPrice: 5389,
      features: [
        'Automated email sending',
        'Basic templates',
        'Simple follow-ups',
        'Open tracking',
      ],
    },
    {
      title: 'Follow-Up Pro',
      monthlyPrice: 749,
      annualPrice: 8089,
      features: [
        'All Basic Outreach features',
        'Advanced follow-up sequences',
        'A/B testing',
        'Click tracking',
        'Lead scoring',
      ],
      highlighted: true,
    },
    {
      title: 'Full Email Funnel',
      monthlyPrice: 999,
      annualPrice: 10789,
      features: [
        'All Follow-Up Pro features',
        'AI-powered personalization',
        'Complex multi-step sequences',
        'CRM integration',
        'Advanced analytics',
        'Lead nurturing workflows',
      ],
    },
  ];

  return (
    <section id="email-outreach" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            ✉️ Cold Email, Warmed Up — Automatically
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fully automated outreach with smart follow-ups that actually get replies.
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
              ctaText="🛒 Start My Outreach Campaign"
              category="email"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailOutreach;