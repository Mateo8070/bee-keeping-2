import React from 'react';
import { FEATURES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-stone-950">
      {/* Background: layered imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="/honey.png"
          className="w-full h-full object-cover opacity-30"
          alt="Golden honey background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
      </div>

      {/* Honeycomb decorative glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-amber-400/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: Copy */}
        <div className="space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">Beekeeping · The Hidden Treasure</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-white">
            Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Golden</span>{' '}
            Wealth of Beekeeping
          </h1>

          <p className="text-lg text-stone-400 leading-relaxed max-w-lg">
            Ngati muli ndi nkhalango pa munda wanu or pakhomo pano —{' '}
            <span className="text-stone-300">gulani zipangizo za ulimi wa njuchi</span>{' '}
            kuti mukolole uchi wambiri!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 flex items-center gap-3 group active:scale-95"
            >
              Shop Equipment
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a
              href={`https://wa.me/265999324743`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/8 border border-white/15 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center gap-3 active:scale-95"
            >
              <i className="fab fa-whatsapp text-emerald-400 text-lg"></i>
              WhatsApp Us
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-5 pt-4 border-t border-white/10">
            <div className="flex -space-x-3">
              {[61, 62, 63, 64].map(i => (
                <img key={i} src={`https://picsum.photos/id/${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-stone-950 object-cover" alt="farmer" />
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5 text-xs mb-0.5">
                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className="text-stone-400 text-sm">
                Trusted by <span className="text-white font-bold">500+ farmers</span> across Malawi
              </p>
            </div>
          </div>
        </div>

        {/* Right: Floating Product Highlight */}
        <div className="relative hidden lg:block">
          {/* Glow */}
          <div className="absolute -inset-8 bg-amber-500/15 rounded-[3rem] blur-3xl" />
          <img
            src="/honey.png"
            className="relative w-full rounded-[2.5rem] shadow-2xl border border-white/10 object-cover aspect-[4/5]"
            alt="Golden Honey - Malandula"
          />
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-8 bg-stone-900/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl max-w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-500/20 border border-amber-500/40 p-2 rounded-lg">
                <i className="fas fa-chart-line text-amber-400"></i>
              </div>
              <span className="font-bold text-white text-sm">High Yield ROI</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">Mukolole uchi wambiri ndi zipangizo za Malandula.</p>
          </div>
          {/* Top-right badge */}
          <div className="absolute -top-4 -right-4 bg-amber-500 text-stone-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
            <i className="fas fa-shield-alt"></i>
            Quality Guaranteed
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/8 bg-stone-950/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className={`fas ${f.icon} text-amber-400 text-sm`}></i>
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-none">{f.value}</p>
                <p className="text-stone-500 text-xs mt-0.5">{f.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
