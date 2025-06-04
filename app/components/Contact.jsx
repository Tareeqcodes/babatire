'use client'
import  { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowRight } from 'lucide-react';

export default function ModernContact() {
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);

  const contactActions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/2348069378639?text=Hello! I\'m interested in your furniture collection.', '_blank'),
      color: 'bg-green-500 hover:bg-green-600',
      delay: 0.1
    },
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.open('tel:+2348069378639', '_blank'),
      color: 'bg-blue-500 hover:bg-blue-600',
      delay: 0.2
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:@babatira002gmail.com?subject=Inquiry about Furniture', '_blank'),
      color: 'bg-purple-500 hover:bg-purple-600',
      delay: 0.3
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your space? Get in touch with our furniture experts
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Location Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Our Showroom</h3>
              <p className="text-gray-300 mb-4">12 Unguwa uku, Tarauni, kano, Nigeria</p>
              <button 
                onClick={() => window.open('https://maps.google.com/?q=12+Industrial+Avenue+Ikeja+Lagos+Nigeria', '_blank')}
                className="flex items-center text-orange-400 hover:text-orange-300 transition-colors"
              >
                Get Directions <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Phone Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us Now</h3>
              <p className="text-gray-300 mb-2">+234 806 937 8639</p>
              <p className="text-gray-300 mb-4">+234 806 937 8639</p>
              <button 
                onClick={() => window.open('tel:+2348069378639', '_blank')}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Call Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Email Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-300 mb-2">@babatira002gmail.com</p>
              <button 
                onClick={() => window.open('mailto:@babatira002gmail.com?subject=Furniture Inquiry', '_blank')}
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Send Email <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Hours Card */}
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Working Hours</h3>
              <p className="text-gray-300 mb-2">Mon - Fri: 8AM - 6PM</p>
              <p className="text-gray-300 mb-4">Saturday: 9AM - 4PM</p>
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Open Now
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* Contact Options */}
        <div className={`absolute bottom-20 right-0 space-y-3 transition-all duration-300 ${isFloatingOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {contactActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div
                key={action.label}
                className="group relative"
                style={{ animationDelay: `${action.delay}s` }}
              >
                <button
                  onClick={action.action}
                  className={`${action.color} w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </button>
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {action.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Floating Button */}
        <button
          onClick={() => setIsFloatingOpen(!isFloatingOpen)}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        >
          <div className={`transition-transform duration-300 ${isFloatingOpen ? 'rotate-45' : 'rotate-0'}`}>
            {isFloatingOpen ? (
              <div className="w-6 h-6 relative">
                <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-white transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-white transform -translate-x-1/2"></div>
              </div>
            ) : (
              <Send className="w-6 h-6 text-white" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}