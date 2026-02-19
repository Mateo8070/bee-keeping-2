import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-400 ${scrolled
            ? 'bg-[#070d1c]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 transition-transform hover:scale-110 duration-300">
                <span className="text-white text-lg">🐝</span>
              </div>
              <a href="#home" className="hover:opacity-80 transition-opacity duration-200">
                <span className="text-xl font-bold text-white block leading-tight font-serif">Malandula</span>
                <span className="text-[10px] text-amber-400 tracking-[0.2em] uppercase font-semibold">Enterprise & General Supplies</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-stone-400 hover:text-amber-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95"
              >
                Order Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-stone-400 hover:text-amber-400 hover:bg-white/8 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0c1530] border-l border-white/8 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <span className="text-lg">🐝</span>
              <span className="font-bold text-amber-400 uppercase tracking-widest text-sm">Menu</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div className="space-y-1.5 flex-1">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-300 hover:text-amber-400 block px-4 py-3.5 rounded-xl text-base font-semibold hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/8"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto border-t border-white/8 pt-6 space-y-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold block px-4 py-4 rounded-xl text-base shadow-lg shadow-amber-500/20 transition-all active:scale-[0.98]"
            >
              Order Now
            </a>
            <p className="text-center text-stone-600 text-xs">0999 324 743 · 0999 469 424</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
