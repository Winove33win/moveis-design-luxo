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

  const bespokePhases = [
    {
      title: 'Curadoria Autoral',
      description: 'Selecionamos materiais nobres, texturas e acabamentos exclusivos para traduzir o seu estilo.',
    },
    {
      title: 'Projeto Sensorial',
      description: 'Estudamos fluxo, luz e ergonomia para que cada peça dialogue com a arquitetura e com a rotina.',
    },
    {
      title: 'Entrega Cenográfica',
      description: 'Montagem white glove, iluminação calibrada e styling final para um ambiente pronto para viver.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop"
            alt="Ambiente de luxo"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-950/90 to-black/80" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-3 text-gold-500 tracking-[0.28em] uppercase text-[11px] font-bold">
              <span className="h-[1px] w-8 bg-gold-500" /> móveis planejados de luxo
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-100 leading-[1.05]">
                Espaços coreografados<br /> para inspirar cada gesto.
              </h1>
              <p className="text-stone-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                Uma linguagem minimalista, com movimento e luz, para ambientes que respiram sofisticação. Curadoria autoral de peças exclusivas e execução cenográfica do início ao fim.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, tenho interesse nos móveis de luxo`}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="primary">Solicitar consultoria privada</Button>
              </a>
              <Link to="/produtos">
                <Button variant="outline">Ver coleção cinética</Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-white/10">
              {[
                { label: 'Ateliê autoral', value: 'Studio interno' },
                { label: 'Materiais', value: 'Madeiras raras + metais' },
                { label: 'White glove', value: 'Entrega e montagem' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-gold-500 mb-2">{item.label}</p>
                  <p className="text-stone-100 font-serif text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-gold-500/10 via-white/5 to-transparent blur-3xl" />
            <div className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
                alt="Sala exclusiva"
                className="w-full h-[520px] object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300">Linha Maison</p>
                  <h3 className="text-3xl font-serif text-stone-50">Living escultórico</h3>
                </div>
                <Link
                  to="/ambientes"
                  className="flex items-center gap-2 text-gold-500 text-xs uppercase tracking-[0.2em] border-b border-gold-500/50 pb-1 hover:text-white"
                >
                  Explorar <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <SectionTitle title="Manifesto Maison" subtitle="Luz, silêncio e proporção" centered={false} />
          </div>
          <div className="md:col-span-2 space-y-6 text-stone-300 text-lg leading-relaxed">
            <p>
              Criamos mobiliário planejado como obra viva: volumes que flutuam, superfícies que capturam a luz e texturas que convidam ao toque.
            </p>
            <p>
              Cada ambiente é coreografado com precisão milimétrica, alinhando arquitetura, tecnologia e artesanato brasileiro. O resultado é uma atmosfera minimalista, porém pulsante, que inspira contemplação e movimento.
            </p>
            <div className="flex items-center gap-3 text-gold-500 text-sm uppercase tracking-[0.24em]">
              <span className="h-px w-8 bg-gold-500" /> Studio Maison Lux
            </div>
          </div>
        </div>
      </section>

      {/* Environments Highlight */}
      <section className="py-24 md:py-28 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle title="Ambientes assinados" subtitle="Curadoria exclusiva" centered={false} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightEnvironments.map((env, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm h-[460px]"
              >
                <img
                  src={env.image}
                  alt={env.name}
                  className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110 group-hover:rotate-[-0.8deg]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute top-6 left-6 text-[11px] uppercase tracking-[0.28em] text-stone-300 flex items-center gap-3">
                  <span className="h-[1px] w-6 bg-white/50" /> Linha {idx + 1}
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-serif text-stone-50">{env.name}</h3>
                    <p className="text-stone-300 text-sm mt-2">Iluminação cenográfica e texturas naturais.</p>
                  </div>
                  <Link
                    to={`/produtos?ambiente=${env.name}`}
                    className="text-gold-500 text-xs uppercase tracking-[0.2em] border-b border-gold-500/50 pb-1 hover:text-white"
                  >
                    Ver coleção
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-4">
              <Crown size={28} className="text-gold-500" />
              <h3 className="text-xl font-serif text-stone-50">Design autoral</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Peças exclusivas desenhadas pelo nosso estúdio, alinhadas à arquitetura do projeto.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-4">
              <ShieldCheck size={28} className="text-gold-500" />
              <h3 className="text-xl font-serif text-stone-50">Materiais nobres</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Nogueira, mármore, latão escovado e tecidos premium aplicados com precisão artesanal.</p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-4">
              <Truck size={28} className="text-gold-500" />
              <h3 className="text-xl font-serif text-stone-50">Entrega coreografada</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Logística white glove, montagem silenciosa e styling final para entrega imediata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/60" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <div className="mb-8 md:mb-0">
              <span className="block text-gold-500 text-xs tracking-[0.28em] uppercase font-bold mb-4">Curadoria cinética</span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 leading-tight">Destaques em movimento</h2>
            </div>
            <Link
              to="/produtos"
              className="text-stone-300 hover:text-gold-500 transition-colors uppercase text-[11px] tracking-[0.24em] border-b border-white/20 hover:border-gold-500 pb-1"
            >
              Catálogo completo
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.26em] text-stone-200 bg-black/50 px-3 py-1">
                    {product.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <h3 className="text-xl font-serif text-stone-50">{product.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed flex-1">{product.shortDescription}</p>
                  <Link to={`/produtos/${product.id}`} className="text-gold-500 text-xs uppercase tracking-[0.2em] border-b border-gold-500/50 pb-1 w-fit">
                    Detalhes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke process */}
      <section className="py-24 md:py-28 bg-black/50 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <SectionTitle title="Processo sob medida" subtitle="Concierge integral" centered={false} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bespokePhases.map((phase, index) => (
              <div key={phase.title} className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.28em] text-gold-500">0{index + 1}</span>
                <h4 className="text-2xl font-serif text-stone-50 mb-4">{phase.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615870216515-0f4c08e30bd5?q=80&w=2000&auto=format&fit=crop"
            alt="Detalhe de mobiliário"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-stone-950/90 to-stone-950" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-50 leading-tight">
              Assinamos ambientes que contam sua história.
            </h2>
            <p className="text-stone-300 text-lg font-light leading-relaxed">
              Fale com nosso concierge e descubra como levar a estética Maison Lux para seu próximo projeto de interiores.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de uma consultoria para meu ambiente`}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary">
              <MessageCircle size={20} />
              Agendar conversa
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;