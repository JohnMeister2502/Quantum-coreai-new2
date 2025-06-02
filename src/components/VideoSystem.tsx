import React from 'react';
import PricingCard from './PricingCard';

interface VideoSystemProps {
  isAnnual: boolean;
}

const VideoSystem: React.FC<VideoSystemProps> = ({ isAnnual }) => {
  const pricingPlans = [
    {
      title: 'Auto Shorts',
      monthlyPrice: 499,
      annualPrice: 5389,
      features: [
        'AI-generated short videos',
        'Text-to-video creation',
        'Basic templates',
        'Auto-posting to one platform',
      ],
    },
    {
      title: 'Voiceover + Posts',
      monthlyPrice: 799,
      annualPrice: 8629,
      features: [
        'All Auto Shorts features',
        'Professional voiceovers',
        'Advanced templates',
        'Multi-platform posting',
        'Basic analytics',
      ],
      highlighted: true,
    },
    {
      title: 'Full Video Funnel',
      monthlyPrice: 1099,
      annualPrice: 11869,
      features: [
        'All Voiceover + Posts features',
        'Custom video sequences',
        'Audience targeting',
        'Advanced analytics',
        'Call-to-action overlays',
        'Lead capture integration',
      ],
    },
  ];

  return (
    <section id="video-system" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-pink-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
            🎥 AI-Powered Videos That Post & Sell for You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automated video content creation — no face, no editing, just clicks.
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
              ctaText="🛒 Automate My Video Marketing"
              category="video"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSystem;