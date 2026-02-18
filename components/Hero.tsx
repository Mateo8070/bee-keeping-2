
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20"
          alt="Beekeeping background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-200">
            <span className="animate-pulse w-2 h-2 bg-amber-600 rounded-full"></span>
            <span className="text-amber-900 text-sm font-bold uppercase tracking-widest">The Hidden Treasure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-stone-900">
            Unlock the Wealth in <span className="text-amber-600">Beekeeping</span>
          </h1>
          
          <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
            Ngati muli ndi nkhalango pa munda wanu or pakhomo pano, gulani zipangizo za ulimi wa njuchi kuti mukolole uchi wambiri!
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#products" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-amber-200 flex items-center gap-3 group"
            >
              Shop Equipment
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a 
              href="#about" 
              className="bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Learn More
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-stone-200">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/id/${i + 60}/100/100`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="User" />
              ))}
            </div>
            <p className="text-sm text-stone-500 font-medium">
              Join <span className="text-stone-900 font-bold">500+ Farmers</span> harvesting honey today
            </p>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-amber-400/20 rounded-[3rem] blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&q=80&w=1000" 
            className="relative rounded-[2rem] shadow-2xl border-8 border-white object-cover aspect-[4/5]"
            alt="Golden Honey"
          />
          <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-amber-100 animate-bounce">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-500 p-2 rounded-lg text-white">
                <i className="fas fa-chart-line"></i>
              </div>
              <span className="font-bold text-amber-900">High Yield</span>
            </div>
            <p className="text-xs text-stone-500">Mukolole uchi wambiri ndi Malandula supplies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
