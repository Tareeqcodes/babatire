'use client'
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Star, ChevronDown, Eye, Heart, Award, Users, Calendar, MapPin, Phone, Mail, Send } from 'lucide-react';

const ModernFurnitureWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animated counter component
  

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-b border-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  BABATIRA
                </h1>
                <p className="text-xs text-gray-400 tracking-widest uppercase">Furniture & Supply Co.</p>
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {['Home', 'About', 'Collection', 'Process', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-6 py-8 space-y-6">
              {['Home', 'About', 'Collection', 'Process', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black py-3 rounded-full font-semibold">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,158,11,0.15) 0%, transparent 50%)`
            }}
          ></div>
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Crafting Excellence Since 2004
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                FURNITURE
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                REIMAGINED
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Where <span className="text-amber-400 font-semibold">premium craftsmanship</span> meets 
              <span className="text-orange-400 font-semibold"> modern design</span>. 
              Creating extraordinary spaces that inspire and endure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Collection <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </button>

              <button className="group flex items-center gap-3 text-white hover:text-amber-400 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                  <Play size={16} className="ml-1" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-gray-400 text-sm mb-2">Discover More</div>
          <ChevronDown className="mx-auto animate-bounce text-amber-400" size={24} />
        </div>
      </section>

      {/* Stats Section */}
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
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-gray-900 to-black">
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
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-black/40 to-transparent rounded-2xl backdrop-blur-sm border border-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Eye size={64} className="text-amber-400 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
                    <p className="text-gray-300 px-8">Transforming spaces into extraordinary experiences through exceptional furniture design</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-px bg-amber-400"></div>
              Our Collection
              <div className="w-8 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
                image: 'from-amber-500/20 to-orange-500/20',
                items: ['Luxury Sofas', 'Bedroom Sets', 'Dining Collections']
              },
              {
                title: 'Executive Collection',
                subtitle: 'Professional Spaces',
                desc: 'Boardrooms and offices that command respect',
                image: 'from-slate-500/20 to-gray-500/20',
                items: ['Executive Desks', 'Conference Tables', 'Storage Solutions']
              },
              {
                title: 'Bespoke Collection',
                subtitle: 'Custom Creations',
                desc: 'One-of-a-kind pieces tailored to your vision',
                image: 'from-purple-500/20 to-pink-500/20',
                items: ['Custom Design', 'Space Planning', 'Restoration']
              }
            ].map((collection, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.image} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-amber-400 font-semibold">{collection.subtitle}</p>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed">{collection.desc}</p>

                  <div className="space-y-3 mb-8">
                    {collection.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="group/btn w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                    Explore Collection 
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-px bg-amber-400"></div>
              Our Process
              <div className="w-8 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Vision</span> to Reality
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Creating detailed plans and 3D visualizations' },
              { step: '03', title: 'Crafting', desc: 'Meticulous construction by master craftsmen' },
              { step: '04', title: 'Delivery', desc: 'Professional installation and final touches' }
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-amber-400">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-px bg-amber-400"></div>
              Testimonials
              <div className="w-8 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Client <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Adebayo',
                role: 'CEO, TechCorp',
                content: 'Babatira transformed our executive offices into a space that truly reflects our company\'s values. The attention to detail is extraordinary.',
                rating: 5
              },
              {
                name: 'James Okafor',
                role: 'Interior Designer',
                content: 'Working with Babatira has been a game-changer for my projects. Their craftsmanship and reliability are unmatched in the industry.',
                rating: 5
              },
              {
                name: 'Maria Udoka',
                role: 'Homeowner',
                content: 'Our custom dining set is not just furniture—it\'s a masterpiece. Every family gathering feels special now.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-black font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase mb-4">
                  <div className="w-8 h-px bg-amber-400"></div>
                  Get In Touch
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Create Something 
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Extraordinary</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to transform your space? Our team is here to bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone', content: '+234 (0) 123 456 7890' },
                  { icon: Mail, title: 'Email', content: 'hello@babatirafurniture.com' },
                  { icon: MapPin, title: 'Location', content: '123 Furniture Avenue, Lagos, Nigeria' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <contact.icon size={20} className="text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{contact.title}</h4>
                      <p className="text-gray-400">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 border border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors">
                    <option value="" className="bg-gray-800">Select project type</option>
                    <option value="residential" className="bg-gray-800">Residential</option>
                    <option value="commercial" className="bg-gray-800">Commercial</option>
                    <option value="custom" className="bg-gray-800">Custom Design</option>
                    <option value="restoration" className="bg-gray-800">Restoration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent mb-2">
                  BABATIRA
                </h3>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">Furniture & Supply Co.</p>
                <p className="text-gray-400 max-w-md leading-relaxed">
                  Crafting exceptional furniture experiences since 2004. Where premium quality meets innovative design.
                </p>
              </div>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500/20 transition-colors cursor-pointer group">
                    <div className="w-4 h-4 bg-gray-400 group-hover:bg-amber-400 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Collection', 'Process', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <div className="space-y-3">
                {['Custom Design', 'Residential', 'Commercial', 'Restoration', 'Consultation'].map((service) => (
                  <div key={service} className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Babatira Furniture & Supply Co. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-2xl shadow-amber-500/25 flex items-center justify-center hover:scale-110 transition-all duration-300">
          <Phone className="text-black group-hover:animate-pulse" size={24} />
        </button>
      </div>

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => {
          // Use index-based positioning to ensure consistent server/client rendering
          const left = ((i * 37) % 100); // Pseudo-random but consistent
          const top = ((i * 73) % 100);
          const delay = (i * 0.3) % 3;
          const duration = 2 + ((i * 0.2) % 2);
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full animate-pulse"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ModernFurnitureWebsite;