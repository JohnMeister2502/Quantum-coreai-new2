import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [wantsAudit, setWantsAudit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
      setWantsAudit(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-indigo-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              📬 The Hidden AI Secrets — Straight to Your Inbox
            </h2>
            <p className="text-xl text-gray-300">
              Subscribe for exclusive tips, automation tricks, behind-the-scenes builds, and early-bird offers.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-green-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">✅ You're In!</h3>
              <p className="text-gray-300">
                Thanks for subscribing! Check your inbox for a confirmation email and your free eBook.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl"
            >
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={wantsAudit}
                    onChange={(e) => setWantsAudit(e.target.checked)}
                    className="w-5 h-5 rounded text-cyan-500 focus:ring-cyan-500 border-gray-600 bg-gray-700"
                  />
                  <span className="ml-2 text-gray-300">Yes, I want a free business audit too.</span>
                </label>
              </div>
              
              <button
  type="button"
  onClick={async () => {
    try {
      const response = await fetch('https://hook.eu2.make.com/njr36bernx4rd81elu9bfx376ivjjmac', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subscribed: true,
          timestamp: new Date().toISOString(),
          // You can add more custom fields here
        }),
      });

      if (response.ok) {
        alert('🎉 Successfully subscribed!');
      } else {
        alert('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('🚨 Network error. Check your connection and try again.');
    }
  }}
  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
>
  💥 Subscribe Now
</button>

              
              <div className="mt-6 space-y-2">
                <p className="text-green-400 flex items-start">
                  <span className="text-green-400 mr-2">✅</span>
                  <span>First 100 get our free eBook: "The Hidden AI Secrets"</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;