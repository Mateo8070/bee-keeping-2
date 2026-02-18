
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
            <div>
              <span className="text-xl font-bold text-amber-900 block leading-tight">Malandula</span>
              <span className="text-xs text-amber-700 tracking-widest uppercase font-semibold">Enterprise</span>
            </div>
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
                className="bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg"
              >
                Order Now
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-amber-900 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-amber-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-700 hover:bg-amber-50 block px-3 py-3 rounded-md text-base font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-amber-600 text-white block px-3 py-3 rounded-md text-base font-medium"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
