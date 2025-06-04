'use client'
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Homeowner, Lagos",
    content: "The dining set we purchased from Babatira has transformed our family meals. The craftsmanship is exceptional and it's held up perfectly with our three active kids.",
    rating: 5,
    image: "/9.webp",
  },
  {
    name: "Chioma Okeke",
    role: "Office Manager, Abuja",
    content: "We furnished our entire office with Babatira furniture and couldn't be happier. The ergonomic chairs have significantly improved our team's comfort and productivity.",
    rating: 4.5,
    image: "/9.webp",
  },
  {
    name: "Emeka Nwankwo",
    role: "Hotel Owner, Enugu",
    content: "For our boutique hotel, we needed custom furniture that would impress our guests. Babatira delivered beyond our expectations with unique, high-quality pieces.",
    rating: 5,
    image: "/9.webp",
  },
  {
    name: 'James Okafor',
    role: 'Interior Designer',
    content: 'Working with Babatira has been a game-changer for my projects. Their craftsmanship and reliability are unmatched in the industry.',
    rating: 5,
    image: "/9.webp"
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-amber-400/80 font-medium text-sm tracking-widest uppercase mb-4"
          >
            <div className="w-8 h-px bg-amber-400/50"></div>
            Testimonials
            <div className="w-8 h-px bg-amber-400/50"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </motion.h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-b from-white/5 to-white/0 p-8 rounded-xl border border-white/5 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center text-center md:flex-row md:text-left gap-6">
              {/* Client Image */}
              <div className="shrink-0 relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-amber-400/30 p-1">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 bg-amber-400/80 w-6 h-6 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex justify-center md:justify-start mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonials[current].rating)
                          ? "text-amber-400 fill-current"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/90 italic mb-5 text-sm md:text-base leading-relaxed">
                  "{testimonials[current].content}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-amber-400/80 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white/90 p-2 rounded-full shadow-lg hover:bg-amber-400 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white/90 p-2 rounded-full shadow-lg hover:bg-amber-400 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current ? "bg-amber-400 w-4" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}