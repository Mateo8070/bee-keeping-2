import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

const BADGE_STYLES: Record<string, string> = {
  'Best Seller': 'bg-amber-500 text-stone-900',
  'Top Rated': 'bg-emerald-500 text-white',
  'New': 'bg-sky-500 text-white',
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const whatsappLink = `https://wa.me/265999324743?text=Hello Malandula Enterprise, I am interested in the ${product.name}.`;

  return (
    <div className="group bg-stone-900 rounded-3xl overflow-hidden border border-white/8 hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col">
      {/* Image */}
      <div className="h-60 overflow-hidden relative bg-stone-800">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        {/* Category pill */}
        <div className="absolute top-4 left-4">
          <span className="bg-stone-950/70 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-400 border border-amber-500/20">
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
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 flex flex-col flex-1">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs font-medium text-amber-500/70 mt-0.5 italic">{product.nameChichewa}</p>
        </div>
        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 flex-1">{product.description}</p>

        <div className="pt-4 border-t border-white/8 flex items-center justify-between gap-3">
          <span className="text-amber-400 font-semibold text-sm">{product.price}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-emerald-500/30 active:scale-95 whitespace-nowrap"
          >
            <i className="fab fa-whatsapp text-base"></i>
            Inquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
