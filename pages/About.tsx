import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { WHATSAPP_NUMBER } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Nossa História" subtitle="Sobre a Maison Lux" centered={false} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-stone-400 leading-relaxed font-light text-lg">
            <p>
              Fundada em 2010, a <strong className="text-gold-500 font-serif">Maison Lux</strong> nasceu do desejo de unir a tradição do artesanato moveleiro com as tendências contemporâneas do design mundial. 
            </p>
            <p>
              Acreditamos que o luxo reside nos detalhes. Não vendemos apenas móveis; entregamos peças de arte que contam histórias e transformam casas em lares de exceção. Cada costura, cada encaixe de madeira e cada polimento é realizado com a máxima precisão por nossos mestres artesãos.
            </p>
            <p>
              Nossa missão é proporcionar uma experiência sensorial única, onde o toque, o visual e o conforto se encontram em perfeita harmonia. Atendemos os mais exigentes escritórios de arquitetura e clientes que não abrem mão da exclusividade.
            </p>
            
            <div className="pt-8">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria de agendar uma consultoria`} target="_blank" rel="noreferrer">
                <Button variant="primary">Agendar Consultoria</Button>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 z-0"></div>
            <img 
              src="https://picsum.photos/seed/craftsman/800/1000" 
              alt="Artesão trabalhando" 
              className="relative z-10 w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Timeline/Values */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Curadoria", desc: "Seleção global dos materiais mais nobres." },
            { title: "Excelência", desc: "Processos de qualidade rigorosos em cada etapa." },
            { title: "Exclusividade", desc: "Séries limitadas e projetos sob medida." }
          ].map((item, idx) => (
             <div key={idx} className="bg-stone-900 p-10 text-center border border-stone-800 hover:border-gold-500/30 transition-colors">
               <h3 className="text-2xl font-serif text-stone-200 mb-4">{item.title}</h3>
               <p className="text-stone-500">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
