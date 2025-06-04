'use client'
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Palette, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="w-8 h-8 text-primary-dark" />,
    title: "Nationwide Delivery",
    description: "We deliver to all states across the country with careful handling.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-dark" />,
    title: "Premium Materials",
    description: "Only the finest woods, fabrics, and metals for lasting durability.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary-dark" />,
    title: "Custom Designs",
    description: "Tailor-made furniture to match your exact specifications and style.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-dark" />,
    title: "Timely Delivery",
    description: "We respect your time with strict adherence to deadlines.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-gradient-to-b  from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl flex space-x-2 space-y-10 text-center justify-center font-black leading-tight" >
            <motion.span 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent block"
            >
              Why Choose
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent block"
            >
              Babatira
            </motion.span>
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="text-amber-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}