import React, { useRef, useEffect, useState } from 'react';
import { FEATURES } from '../constants';

/* ── Animated stat counter ─────────────────────────────────────── */
interface StatItem { icon: string; value: string; label: string; }

const StatCounter: React.FC<{ stat: StatItem; delay?: number }> = ({ stat, delay = 0 }) => {
  const match = stat.value.match(/^(\d+\.?\d*)(.*)/);
  const numericTarget = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const isDecimal = numericTarget !== null && !Number.isInteger(numericTarget);

  const [display, setDisplay] = useState<string>(numericTarget !== null ? '0' : stat.value);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || numericTarget === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numericTarget]);

  useEffect(() => {
    if (!triggered || numericTarget === null) return;
    const duration = 1800;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? (Math.round(eased * numericTarget * 10) / 10).toFixed(1)
        : String(Math.floor(eased * numericTarget));
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(id);
  }, [triggered, numericTarget, suffix, isDecimal, delay]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <div className="w-9 h-9 lg:w-10 lg:h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
        <i className={`fas ${stat.icon} text-amber-400 text-xs lg:text-sm`}></i>
      </div>
      <div>
        <p className="font-bold text-white text-base lg:text-xl leading-none tabular-nums">{display}</p>
        <p className="text-stone-500 text-[10px] lg:text-xs mt-0.5">{stat.label}</p>
      </div>
    </div>
  );
};

/* ── Hero ─────────────────────────────────────────────────────── */
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ── Background image ── visible on ALL sizes, more prominent on mobile */}
      <div className="absolute inset-0 z-0">
        <img
          src="/honey.png"
          className="w-full h-full object-cover opacity-55 md:opacity-25"
          alt="Golden honey background"
        />
        {/* Mobile: strong bottom-to-top gradient so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d1c] via-[#070d1c]/80 to-[#070d1c]/50 md:hidden" />
        {/* Desktop: split gradient from left */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#070d1c] via-[#070d1c]/85 to-[#070d1c]/40" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#070d1c] via-transparent to-[#070d1c]/60" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-16 grid lg:grid-cols-[3fr_2fr] gap-12 items-center w-full">

        {/* Left: copy */}
        <div className="space-y-6 lg:space-y-8 min-w-0">

          {/* Eyebrow — badge + decorative rule on desktop */}
          <div className="hero-fade-up flex items-center gap-4" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-full flex-shrink-0">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.18em]">Beekeeping</span>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-stone-700 to-transparent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">The Hidden Treasure</span>
            </div>
          </div>

          {/* Headline — 3-line typographic treatment */}
          <div className="hero-fade-up space-y-1" style={{ animationDelay: '0.2s' }}>
            <p className="font-serif text-stone-400 text-xl sm:text-2xl lg:text-3xl leading-tight">Unlock the</p>
            <h1 className="font-serif leading-none text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              Golden Wealth
            </h1>
            <p className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl leading-tight">of Beekeeping</p>
          </div>

          {/* Sub-copy — left-border callout instead of plain paragraph */}
          <div className="hero-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-4">
              <div className="w-0.5 flex-shrink-0 rounded-full bg-gradient-to-b from-amber-500 to-transparent mt-1 self-stretch" />
              <div className="space-y-2">
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic">
                  "Ngati muli ndi nkhalango pa munda wanu or pakhomo panu —
                  gulani zipangizo za ulimi wa njuchi kuti mukolore uchi wambiri!"
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-base">🍯</span>
                  <span className="text-amber-400/80 text-xs font-semibold uppercase tracking-widest">
                    Malawi's premium beekeeping supplier
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* CTA buttons — thinner on mobile */}
          <div className="hero-fade-up flex flex-wrap gap-3" style={{ animationDelay: '0.4s' }}>
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-400 text-stone-900 px-5 py-2.5 text-sm md:px-8 md:py-4 md:text-base rounded-xl font-bold transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 flex items-center gap-2 group active:scale-95"
            >
              Shop Equipment
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-200 text-xs md:text-sm" />
            </a>
            <a
              href="#about"
              className="bg-white/5 border border-white/12 hover:bg-white/10 text-white px-5 py-2.5 text-sm md:px-8 md:py-4 md:text-base rounded-xl font-bold transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group active:scale-95"
            >
              Learn More
              <i className="fas fa-chevron-down group-hover:translate-y-0.5 transition-transform duration-200 text-xs md:text-sm" />
            </a>
          </div>

          {/* Social proof */}
          <div className="hero-fade-up flex items-center gap-4 pt-4 border-t border-white/8" style={{ animationDelay: '0.5s' }}>
            <div className="flex -space-x-2.5">
              {[61, 62, 63, 64].map(i => (
                <img key={i} src={`https://picsum.photos/id/${i}/100/100`} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-[#070d1c] object-cover" alt="farmer" />
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5 text-[10px] mb-0.5">
                {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star" />)}
              </div>
              <p className="text-stone-400 text-xs lg:text-sm">
                Trusted by <span className="text-white font-bold">500+ farmers</span> across Malawi
              </p>
            </div>
          </div>
        </div>

        {/* Right: floating product image — desktop only */}
        <div className="relative hidden lg:block float-anim">
          <div className="absolute -inset-8 bg-amber-500/12 rounded-[3rem] blur-3xl" />
          <img
            src="/honey.png"
            className="relative w-full rounded-[2.5rem] shadow-2xl border border-white/8 object-cover aspect-[4/5]"
            alt="Golden Honey – Malandula"
          />
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-8 bg-[#0c1530]/90 backdrop-blur-md border border-white/8 p-5 rounded-2xl shadow-2xl max-w-[220px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-500/20 border border-amber-500/30 p-2 rounded-lg">
                <i className="fas fa-chart-line text-amber-400" />
              </div>
              <span className="font-bold text-white text-sm">High Yield ROI</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">Mukolole uchi wambiri ndi zipangizo za Malandula.</p>
          </div>
          {/* Top badge */}
          <div className="absolute -top-4 -right-4 bg-amber-500 text-stone-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-amber-500/30 flex items-center gap-1.5">
            <i className="fas fa-shield-alt" />
            Quality Guaranteed
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/5 bg-[#070d1c]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-7 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {FEATURES.map((f, i) => (
            <StatCounter key={f.label} stat={f} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
