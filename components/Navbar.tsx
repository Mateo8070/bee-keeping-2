import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-morphism shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-bee text-xl"></i>
            </div>
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold text-amber-900 block leading-tight">Malandula</span>
              <span className="text-xs text-amber-700 tracking-widest uppercase font-semibold">Enterprise</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-stone-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Order Now
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-amber-900 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar/Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] transition-opacity md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar/Mobile Menu Content */}
      <div className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-[51] transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-amber-900 uppercase tracking-widest">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-600">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="space-y-4 flex-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-stone-800 hover:text-amber-600 block px-4 py-3 rounded-xl text-lg font-semibold bg-stone-50 hover:bg-amber-50 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto border-t border-stone-100 pt-6 space-y-4">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-amber-600 text-white block px-4 py-4 rounded-xl text-lg font-bold shadow-lg shadow-amber-200"
            >
              Order Now
            </a>
            <div className="flex justify-center gap-4 text-stone-400">
              <i className="fab fa-facebook hover:text-amber-600 cursor-pointer"></i>
              <i className="fab fa-whatsapp hover:text-amber-600 cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-amber-600 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
