
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const whatsappLink = `https://wa.me/265999324743?text=Hello Malandula Enterprise, I am interested in the ${product.name}.`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100">
      <div className="h-64 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-700 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-amber-600 mt-1 italic">
            {product.nameChichewa}
          </p>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <div className="pt-4 border-t border-stone-50">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-all shadow-md group-hover:shadow-green-100"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            Inquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
