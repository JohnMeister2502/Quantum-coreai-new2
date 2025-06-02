import React from 'react';

const BusinessAudit: React.FC = () => {
  return (
    <section id="business-audit" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900 to-gray-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              🧠 Get a Custom AI Automation Report for Your Business
            </h2>
            <p className="text-xl text-gray-300">
              We scan your public info, site, and socials to show you exactly what to automate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">✔️</span>
                <span className="text-white font-medium">Website & Social Scan</span>
              </div>
              <p className="text-gray-400 text-sm">
                We analyze your online presence to identify automation opportunities.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">✔️</span>
                <span className="text-white font-medium">Automation Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm">
                Detailed list of processes that can be automated to save time and money.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">✔️</span>
                <span className="text-white font-medium">Estimated Pricing + PDF Report</span>
              </div>
              <p className="text-gray-400 text-sm">
                Comprehensive report with cost estimates and implementation timeline.
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl text-white mb-2">One-Time Price: <span className="line-through text-gray-400">R149</span> <span className="text-green-400 font-bold">FREE</span> with any paid service</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 w-full sm:w-auto">
              🛒 Buy My Audit
            </button>
            
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 w-full sm:w-auto">
              🎁 Claim Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAudit;