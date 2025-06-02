import React from 'react';

const SocialFeed: React.FC = () => {
  // Mock social media posts
  const socialPosts = [
    {
      id: 1,
      platform: 'instagram',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'WhatsApp Bot Launch',
      description: 'Just launched a new AI chatbot for a client that\'s already handling 200+ inquiries daily!',
    },
    {
      id: 2,
      platform: 'facebook',
      imageUrl: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'E-commerce Site',
      description: 'New store built and deployed - 32% conversion rate in the first week!',
    },
    {
      id: 3,
      platform: 'instagram',
      imageUrl: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'AI Video Generator',
      description: 'Our new AI video system creating content while you sleep. No camera needed!',
    },
    {
      id: 4,
      platform: 'facebook',
      imageUrl: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cold Email Campaign',
      description: '54% open rate and 12% reply rate on our latest outreach campaign setup.',
    },
    {
      id: 5,
      platform: 'instagram',
      imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Lead Gen Bot',
      description: 'This automation has collected 126 qualified leads in just 72 hours!',
    },
    {
      id: 6,
      platform: 'facebook',
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Messenger Bot',
      description: 'New Facebook Messenger bot handling 90% of customer queries automatically.',
    },
  ];

  return (
    <section id="social-feed" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            📱 Watch Us Build in Real Time
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're constantly launching bots, websites, and automations. See them in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/50"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    post.platform === 'instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}>
                    {post.platform === 'instagram' ? 'Instagram' : 'Facebook'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-purple-500/30">
                    🚀 Build One Like This
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;