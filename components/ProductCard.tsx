import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/produtos/${product.id}`} className="group block h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-900 mb-6 transition-all duration-500 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-stone-800 animate-pulse" /> {/* Loading placeholder */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Overlay on hover: Darkens slightly as requested */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-500" />

        <div className="absolute top-0 left-0 p-4 w-full flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <span className="bg-stone-950/90 backdrop-blur-md text-stone-200 text-[10px] px-3 py-1 uppercase tracking-widest border border-white/10 shadow-lg">
             {product.category}
           </span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow border-t border-white/5 pt-6 group-hover:border-gold-500/30 transition-colors duration-500">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-stone-200 group-hover:text-gold-500 transition-colors duration-300">
            {product.name}
          </h3>
          <span className="text-gold-500 text-sm font-semibold whitespace-nowrap opacity-80 group-hover:opacity-100">
             R$ {product.price.toLocaleString('pt-BR')}
          </span>
        </div>
        
        <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2 mb-4 group-hover:text-stone-400 transition-colors">
          {product.shortDescription}
        </p>
        
        <div className="mt-auto flex items-center text-xs uppercase tracking-widest text-stone-500 group-hover:text-gold-400 transition-colors gap-2">
          Ver Detalhes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;