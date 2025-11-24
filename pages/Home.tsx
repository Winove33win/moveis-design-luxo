import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { MessageCircle, ArrowRight, ShieldCheck, Truck, Crown } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  const { products, environments } = useProducts();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  // Take first 3 environments for the home page highlight
  const highlightEnvironments = environments.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
            alt="Ambiente de luxo" 
            className="w-full h-full object-cover animate-fade-in-slow"
          />
          {/* Enhanced Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-stone-950" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center mt-20">
          <span className="inline-block text-gold-500 tracking-[0.4em] uppercase text-xs font-bold mb-6 border border-gold-500/30 px-4 py-2 bg-black/20 backdrop-blur-sm animate-fade-in-up">
            Mobiliário de Alto Padrão
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-100 mb-8 leading-tight tracking-tight drop-shadow-2xl">
            Design que transcende <br /> <span className="italic text-stone-300 font-light">o tempo</span>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
            Uma curadoria impecável de móveis assinados para transformar ambientes em experiências sensoriais únicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, tenho interesse nos móveis de luxo`} target="_blank" rel="noreferrer">
              <Button variant="primary">
                Solicitar Consultoria
              </Button>
            </a>
            <Link to="/produtos">
              <Button variant="outline">Explorar Coleção</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Environments Highlight - Editorial Style */}
      <section className="py-32 bg-stone-950">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle title="Ambientes Assinados" subtitle="Curadoria Exclusiva" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightEnvironments.map((env, idx) => (
              <div key={idx} className="group relative h-[500px] overflow-hidden cursor-pointer border border-stone-800 hover:border-gold-500/30 transition-colors">
                <img 
                  src={env.image}
                  alt={env.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-80 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 border-t border-white/20 pt-6">
                  <h3 className="text-3xl font-serif text-stone-100 mb-2">{env.name}</h3>
                  <Link to={`/produtos?ambiente=${env.name}`} className="text-gold-500 text-xs uppercase tracking-luxury flex items-center gap-3 hover:text-white transition-colors mt-4">
                    Ver Coleção <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Minimalist Icons */}
      <section className="py-24 bg-stone-900/50 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
            <div className="px-6 py-4">
              <Crown size={32} className="mx-auto mb-6 text-gold-500 opacity-80" strokeWidth={1} />
              <h3 className="text-lg font-serif text-stone-100 mb-4 tracking-wide">Design Autoral</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">Peças assinadas por designers renomados, garantindo personalidade única.</p>
            </div>
            <div className="px-6 py-4">
              <ShieldCheck size={32} className="mx-auto mb-6 text-gold-500 opacity-80" strokeWidth={1} />
              <h3 className="text-lg font-serif text-stone-100 mb-4 tracking-wide">Materiais Premium</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">Madeiras nobres, pedras naturais e tecidos importados de alta gramatura.</p>
            </div>
            <div className="px-6 py-4">
              <Truck size={32} className="mx-auto mb-6 text-gold-500 opacity-80" strokeWidth={1} />
              <h3 className="text-lg font-serif text-stone-100 mb-4 tracking-wide">Entrega White Glove</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">Logística especializada com montagem inclusa em todo território nacional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-stone-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="mb-8 md:mb-0">
               <span className="block text-gold-500 text-xs tracking-luxury uppercase font-bold mb-4 opacity-90">Seleção Exclusiva</span>
               <h2 className="font-serif text-3xl md:text-5xl text-stone-100">Destaques da Coleção</h2>
            </div>
            <Link to="/produtos" className="text-stone-400 hover:text-gold-500 transition-colors uppercase text-xs tracking-widest border-b border-stone-800 hover:border-gold-500 pb-1">
              Ver Catálogo Completo
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Style - Parallax-like */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-30 grayscale fixed-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif text-stone-100 mb-6 leading-tight">
              Sua casa merece <br/>uma assinatura única.
            </h2>
            <p className="text-stone-400 text-lg font-light leading-relaxed mb-8">
              Nossa equipe de concierges está pronta para apresentar soluções personalizadas para o seu projeto.
            </p>
             <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de uma consultoria para meu ambiente`} target="_blank" rel="noreferrer">
              <Button variant="primary">
                <MessageCircle size={20} />
                Falar com Consultor
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;