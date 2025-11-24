import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { CATEGORIES } from '../constants';
import { Filter, X, ChevronRight } from 'lucide-react';

const Products: React.FC = () => {
  const { products, environments } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialEnv = searchParams.get('ambiente') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedEnvironment, setSelectedEnvironment] = useState<string>(initialEnv);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCat = selectedCategory ? product.category === selectedCategory : true;
      const matchEnv = selectedEnvironment ? product.environment === selectedEnvironment : true;
      return matchCat && matchEnv;
    });
  }, [products, selectedCategory, selectedEnvironment]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedEnvironment('');
    setSearchParams({});
  };

  return (
    <div className="pt-40 pb-32 min-h-screen bg-stone-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
             <h1 className="text-4xl md:text-6xl font-serif text-stone-100 mb-4">Coleção</h1>
             <p className="text-stone-500 font-light">Explore nossa seleção de peças exclusivas.</p>
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-stone-300 uppercase text-xs tracking-widest border border-stone-800 px-6 py-3 hover:border-gold-500 hover:text-gold-500 transition-colors md:hidden mt-6 md:mt-0"
          >
            <Filter size={14} /> Filtros
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 shrink-0 space-y-12 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {(selectedCategory || selectedEnvironment) && (
              <button 
                onClick={clearFilters}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors border-b border-red-900/30 pb-1"
              >
                <X size={12} /> Limpar Filtros
              </button>
            )}

            <div>
              <h4 className="font-sans text-xs uppercase tracking-luxury font-bold text-stone-100 mb-6">Ambientes</h4>
              <ul className="space-y-1">
                {environments.map(env => (
                  <li key={env.id}>
                    <button 
                      onClick={() => {
                         setSelectedEnvironment(selectedEnvironment === env.name ? '' : env.name);
                         setSearchParams(prev => {
                           if (selectedEnvironment === env.name) {
                             prev.delete('ambiente');
                           } else {
                             prev.set('ambiente', env.name);
                           }
                           return prev;
                         });
                      }}
                      className={`text-sm w-full text-left py-2 px-3 transition-all duration-300 border-l-2 ${selectedEnvironment === env.name ? 'border-gold-500 text-gold-500 bg-white/5 pl-4' : 'border-transparent text-stone-500 hover:text-stone-300 hover:pl-4'}`}
                    >
                      {env.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs uppercase tracking-luxury font-bold text-stone-100 mb-6">Categorias</h4>
              <ul className="space-y-1">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                      className={`text-sm w-full text-left py-2 px-3 transition-all duration-300 border-l-2 ${selectedCategory === cat ? 'border-gold-500 text-gold-500 bg-white/5 pl-4' : 'border-transparent text-stone-500 hover:text-stone-300 hover:pl-4'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 border border-dashed border-stone-800 rounded-sm">
                <p className="text-stone-400 text-lg font-light mb-4">Nenhuma peça encontrada.</p>
                <button onClick={clearFilters} className="text-gold-500 text-sm uppercase tracking-widest hover:text-white transition-colors">Limpar filtros</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;