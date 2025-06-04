'use client'
import { ArrowRight } from 'lucide-react';

export default function Categories() {
  return (
    <section id="categories" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-px bg-amber-400"></div>
            Our Collection
            <div className="w-8 h-px bg-amber-400"></div>
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Curated for <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our signature collections, each piece meticulously designed to elevate your space
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Residential Collection',
              subtitle: 'Home Sanctuaries',
              desc: 'Living rooms, bedrooms, and dining spaces that define comfort',
              image: '/images/5.webp',
              items: ['Luxury Sofas', 'Bedroom Sets', 'Dining Collections']
            },
            {
              title: 'Executive Collection',
              subtitle: 'Professional Spaces',
              desc: 'Boardrooms and offices that command respect',
              image: '/images/6.webp',
              items: ['Executive Desks', 'Conference Tables', 'Storage Solutions']
            },
            {
              title: 'Bespoke Collection',
              subtitle: 'Custom Creations',
              desc: 'One-of-a-kind pieces tailored to your vision',
              image: '/images/7.webp',
              items: ['Custom Design', 'Space Planning', 'Restoration']
            }
          ].map((collection, index) => (
            <div 
              key={index}
              className="group relative h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-500"
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${collection.image})` }}
              ></div>
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>
              
              {/* Content container */}
              <div className="relative h-full flex flex-col justify-between p-8 z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                  <p className="text-amber-400 font-semibold mb-4">{collection.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{collection.desc}</p>

                  <div className="space-y-3 mb-6">
                    {collection.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Explore Collection 
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}