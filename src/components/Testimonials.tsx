import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "My website pays for itself monthly. Converts better than any staff member.",
      author: "Jason T.",
      business: "Fitness Studio Owner",
      stars: 5,
    },
    {
      id: 2,
      quote: "The WhatsApp AI Bot closed 72 leads in 3 days.",
      author: "Sophia L.",
      business: "Property Agent",
      stars: 5,
    },
    {
      id: 3,
      quote: "Our email outreach pulled in 14 meetings in the first week.",
      author: "Michael K.",
      business: "B2B Service Provider",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg group hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Animated glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-all duration-1000"></div>
              
              <div className="relative">
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-xl text-white mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;