import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0wLTVoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem0tMTAgMTBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem01IDBoMnYyaC0ydi0yem0tMTUgNWgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bS0yMC0xNWgydjJoLTJ2LTJ6bTUtNWgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6bTUgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Core AI Solutions</h3>
            <p className="text-gray-400 mb-6">
              The AI Automation & Web Development Powerhouse
            </p>
            <p className="text-gray-400 mb-2">Based in South Africa | Serving Global Clients</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@quantum-coreai.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  📧 info@quantum-coreai.com
                </a>
              </li>
              <li>
                <a href="tel:+27791098810" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  ☎️ +27 79 109 8810
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  🔐 Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  🔐 Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            💳 Secure Payments via PayFast
          </p>
          <p className="text-gray-600 text-sm mt-4">
            &copy; {new Date().getFullYear()} Quantum Core AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;