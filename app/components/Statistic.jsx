'use client'
import { useState, useEffect } from "react";
import { Heart, Award, Users, Calendar } from 'lucide-react';

export default function Statistic() {

    const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
  };

  return (
   <section className="py-20 bg-gradient-to-b from-black to-gray-900">
           <div className="max-w-7xl mx-auto px-6">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { number: 20, suffix: '+', label: 'Years Experience', icon: Calendar },
                 { number: 5000, suffix: '+', label: 'Happy Clients', icon: Users },
                 { number: 15000, suffix: '+', label: 'Pieces Crafted', icon: Award },
                 { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: Heart }
               ].map((stat, index) => (
                 <div 
                   key={index}
                   className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-amber-400/30 transition-all duration-300 group"
                 >
                   <div className="mb-4 flex justify-center">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <stat.icon size={24} className="text-amber-400" />
                     </div>
                   </div>
                   <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                     <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                   </div>
                   <div className="text-gray-400 text-xs md:text-xl font-medium">{stat.label}</div>
                 </div>
               ))}
             </div>
           </div>
         </section>
  )
}
