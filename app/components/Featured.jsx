'use client'

export default function Featured() {
  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wide uppercase mb-4">
              <div className="w-8 h-px bg-amber-400"></div>
              Our Process
              <div className="w-8 h-px bg-amber-400"></div>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
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
  );
}