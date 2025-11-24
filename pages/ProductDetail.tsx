import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { MessageCircle, Check, ArrowLeft, Star, Shield, Truck } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById, products } = useProducts();
  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-stone-950">
        <h2 className="text-2xl text-stone-300 mb-4 font-serif">Produto indisponível</h2>
        <Link to="/produtos" className="text-gold-500 hover:text-white transition-colors uppercase tracking-widest text-xs">Voltar para catálogo</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = `Olá! Gostaria de receber um orçamento formal para a peça *${product.name}* (Ref: ${product.id}).`;

  return (
    <div className="pt-32 pb-24 bg-stone-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <Link to="/produtos" className="inline-flex items-center gap-2 text-stone-500 hover:text-gold-500 transition-colors uppercase tracking-widest text-[10px]">
            <ArrowLeft size={12} /> Voltar para Coleção
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Images Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] w-full bg-stone-900 overflow-hidden relative group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {product.secondaryImages.length > 0 ? (
                 product.secondaryImages.map((img, idx) => (
                  <div key={idx} className="aspect-square bg-stone-900 overflow-hidden relative group cursor-pointer">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                    <img src={img} alt={`${product.name} detail ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                 ))
              ) : (
                 [1, 2].map((_, idx) => (
                  <div key={idx} className="aspect-square bg-stone-900 flex items-center justify-center border border-stone-800 text-stone-700 text-xs uppercase tracking-widest">
                    Detalhe {idx+1}
                  </div>
                 ))
              )}
            </div>
          </div>

          {/* Product Info - Sticky */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-4 block">{product.environment} — {product.category}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-100 mb-6 leading-tight">{product.name}</h1>
              
              <div className="flex items-baseline gap-4 mb-10 border-b border-white/10 pb-8">
                <span className="text-stone-400 font-light text-sm">A partir de</span>
                <span className="text-3xl font-serif text-stone-200">R$ {product.price.toLocaleString('pt-BR')}</span>
              </div>

              <div className="mb-10">
                <h3 className="text-stone-100 font-serif text-lg mb-4">Sobre a peça</h3>
                <p className="text-stone-400 font-light leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
              </div>

              <div className="space-y-6 mb-12 bg-stone-900/30 p-8 border border-white/5">
                <div className="flex items-start gap-4 text-stone-400">
                  <Star size={20} className="text-gold-500 shrink-0" strokeWidth={1} />
                  <div>
                    <strong className="block text-stone-200 font-serif mb-1">Acabamento Premium</strong>
                    <span className="text-sm font-light">Materiais nobres selecionados manualmente.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-stone-400">
                  <Shield size={20} className="text-gold-500 shrink-0" strokeWidth={1} />
                  <div>
                     <strong className="block text-stone-200 font-serif mb-1">Garantia Vitalícia</strong>
                     <span className="text-sm font-light">Estrutura garantida contra defeitos de fabricação.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-stone-400">
                  <Truck size={20} className="text-gold-500 shrink-0" strokeWidth={1} />
                  <div>
                    <strong className="block text-stone-200 font-serif mb-1">Envio Segurado</strong>
                    <span className="text-sm font-light">Transporte especializado para itens de luxo.</span>
                  </div>
                </div>
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer" className="block">
                <Button fullWidth className="text-sm py-5 shadow-2xl shadow-gold-500/10">
                  <MessageCircle className="mr-2" size={20} />
                  Solicitar Orçamento
                </Button>
              </a>
              <p className="text-center text-stone-600 text-xs mt-6 font-light">
                Atendimento exclusivo. Respondemos em instantes.
              </p>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-40 border-t border-white/5 pt-24">
            <h3 className="text-3xl font-serif text-stone-100 mb-12 text-center">Complete o Ambiente</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;