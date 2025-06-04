'use client'
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './UI/SectionTitle';
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
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our customers say"
        />

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary-light p-8 md:p-12 rounded-xl shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(testimonials[current].rating)
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  {testimonials[current].rating % 1 !== 0 && (
                    <Star className="w-5 h-5 text-accent-DEFAULT fill-current opacity-50" />
                  )}
                </div>
                <p className="text-lg italic text-white mb-6">
                  "{testimonials[current].content}"
                </p>
                <div>
                  <h4 className="font-bold text-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-300">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-primary-light transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary-dark" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-primary-light transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary-dark" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-primary-dark" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}