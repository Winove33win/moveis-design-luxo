import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { useProducts } from '../context/ProductContext';
import { ArrowRight } from 'lucide-react';

const Environments: React.FC = () => {
  const { environments } = useProducts();
  
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Ambientes Decorados" subtitle="Inspire-se" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {environments.map((env) => (
            <div key={env.id} className="relative group overflow-hidden h-[400px]">
              <img 
                src={env.image} 
                alt={env.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-3xl font-serif text-white mb-4">{env.name}</h3>
                <Link to={`/produtos?ambiente=${encodeURIComponent(env.name)}`}>
                  <button className="bg-gold-500 text-stone-950 px-6 py-3 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-colors">
                    Ver Produtos <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Environments;