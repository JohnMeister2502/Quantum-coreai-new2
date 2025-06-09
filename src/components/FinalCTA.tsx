import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-orange-900 opacity-90"></div>
      
      {/* Animated pulsing circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 rounded-full opacity-20 animate-ping" style={{ animationDuration: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
            🚨 You're Losing Sales While Reading This.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            Your competitor just automated their leads, follow-ups, and support.<br />
            You can too — in 48 hours or less.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#newsletter">
              <button className="px-10 py-5 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 w-full sm:w-auto">
                🔥 Start Now
              </button>
            </a>        
            <a
  href="https://calendly.com/solutions-quantumcoreai/ai-automation-consultation"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-10 py-5 rounded-lg bg-white text-gray-900 font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg w-full sm:w-auto">
    📞 Book a Call
  </button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;