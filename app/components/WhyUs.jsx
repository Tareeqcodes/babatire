'use client'
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Palette, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Nationwide Delivery",
    description: "We deliver to all states across the country with careful handling.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Premium Materials",
    description: "Only the finest woods, fabrics, and metals for lasting durability.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Custom Designs",
    description: "Tailor-made furniture to match your exact specifications and style.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timely Delivery",
    description: "We respect your time with strict adherence to deadlines.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-amber-400/80 font-medium text-sm tracking-widest uppercase mb-4"
          >
            <div className="w-8 h-px bg-amber-400/50"></div>
            Our Advantages
            <div className="w-8 h-px bg-amber-400/50"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Why Choose Babatira
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Excellence in craftsmanship, materials, and service that sets us apart
          </motion.p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-b from-white/5 to-white/0 p-8 rounded-xl border border-white/5 hover:border-amber-400/30 backdrop-blur-sm transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-400/10 flex items-center justify-center mb-6 mx-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-400/10 flex items-center justify-center text-amber-400">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}