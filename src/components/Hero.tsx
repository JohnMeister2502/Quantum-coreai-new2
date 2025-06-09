import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0wLTVoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem0tMTAgMTBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem0tMTUgNWgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bS0yMC0xNWgydjJoLTJ2LTJ6bTUtNWgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
          Your Business is Missing Its Smartest Employee.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          We build websites that convert. Bots that sell. And automation that replaces manual work — permanently.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
  <a href="#web-development">
    <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 w-full sm:w-auto">
      🚀 Build My Website
    </button>
  </a>

  <a href="#whatsapp-automation">
    <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 w-full sm:w-auto">
      🤖 Automate My Business
    </button>
  </a>

  <a href="#business-audit">
    <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 w-full sm:w-auto">
      📩 Get Free Audit
    </button>
  </a>
</div>

        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-10 w-10 text-cyan-400 transform rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;