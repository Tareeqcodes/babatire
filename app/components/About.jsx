'use client'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


export default function About() {
  return (
   <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase">
                  <div className="w-8 h-px bg-amber-400"></div>
                  About Babatira
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-white">Crafting </span>
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Tomorrow's</span>
                  <span className="text-white"> Heritage</span>
                </h2>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                At Babatira Furniture, we don't just create furniture—we architect experiences. 
                Each piece tells a story of meticulous craftsmanship, innovative design, and 
                unwavering commitment to excellence.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Premium Materials', desc: 'Sustainably sourced hardwoods and premium finishes' },
                  { title: 'Master Craftsmen', desc: 'Decades of expertise in traditional and modern techniques' },
                  { title: 'Bespoke Design', desc: 'Custom solutions tailored to your unique vision' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
                Our Story <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            <div className="relative">
               <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative">
              <img
                src="/images/2.webp"
                alt="Our workshop"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-16 md:-bottom-6 md:-left-6 bg-white p-2 rounded-lg shadow-lg block">
                <img
                  src="/images/1.webp"
                  alt="Our team"
                  className="rounded-lg w-48 h-30 md:w-40 md:h-32 object-cover"
                />
              </div>
            </div>
          </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}