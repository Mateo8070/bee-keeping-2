import React from 'react';
import { Product } from '../types';
import { useInView } from '../hooks';

interface Props {
  product: Product;
  delay?: number;
}

const BADGE_STYLES: Record<string, string> = {
  'Best Seller': 'bg-amber-500 text-stone-900',
  'Top Rated': 'bg-emerald-500 text-white',
  'New': 'bg-sky-500 text-white',
};

const ProductCard: React.FC<Props> = ({ product, delay = 0 }) => {
  const { isVisible, ref } = useInView(0.1);
  const whatsappLink = `https://wa.me/265999324743?text=Hello Malandula Enterprise, I am interested in the ${product.name}.`;

  return (
    <div
      ref={ref}
      className="reveal group bg-[#0f1e3a] rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/8 flex flex-col"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? undefined : 0,
      }}
    >
      {/* Image */}
      <div className="h-60 overflow-hidden relative bg-[#0c1530]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
        />
        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#070d1c]/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-400 border border-amber-500/20">
            {product.category}
          </span>
        </div>
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${BADGE_STYLES[product.badge] ?? 'bg-amber-500 text-stone-900'}`}>
              {product.badge}
            </span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e3a]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 flex flex-col flex-1">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300 leading-snug">
            {product.name}
          </h3>
          <p className="text-xs font-medium text-amber-500/60 mt-0.5 italic">{product.nameChichewa}</p>
        </div>
        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 flex-1">{product.description}</p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <span className="text-amber-400 font-semibold text-sm">{product.price}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-stone-900 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <i className="fas fa-tag text-xs"></i>
            Get Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
