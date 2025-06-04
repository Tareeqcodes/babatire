'use client'
import { ArrowRight, Play } from 'lucide-react';



export default function Hero() {
  return (
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
              <div 
                className="absolute inset-0 opacity-30"
                
              ></div>
              {/* Floating geometric shapes */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
    
            <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
              <div className="space-y-10 md:space-y-8">
    
                <h1 className="text-5xl md:text-7xl lg:text-8xl mt-10 font-black leading-tight">
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
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-gray-400 text-sm mb-2">Discover More</div>
              <ChevronDown className="mx-auto animate-bounce text-amber-400" size={24} />
            </div> */}
          </section>
  );
}