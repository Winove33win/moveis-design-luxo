import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Policies: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="Políticas e Termos" centered={false} />
        
        <div className="space-y-12 text-stone-400 leading-relaxed font-light">
          <section>
            <h3 className="text-xl font-serif text-stone-100 mb-4">1. Política de Privacidade</h3>
            <p className="mb-4">
              Na Maison Lux, a privacidade dos nossos clientes é prioridade. Todas as informações coletadas através de nossos formulários são utilizadas exclusivamente para fins de contato comercial e personalização do atendimento.
            </p>
            <p>
              Não compartilhamos seus dados com terceiros sem autorização prévia. Seus dados de contato (telefone e e-mail) são armazenados em ambiente seguro.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif text-stone-100 mb-4">2. Política de Entrega</h3>
            <p className="mb-4">
              Realizamos entregas em todo o território nacional através de transportadoras especializadas em móveis de alto padrão e obras de arte.
            </p>
            <p>
              O prazo de entrega varia de acordo com a região e a disponibilidade do produto. Para peças sob medida ou personalizadas, o prazo médio de produção é de 45 a 60 dias úteis. Todos os produtos são entregues com seguro total.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-serif text-stone-100 mb-4">3. Trocas e Devoluções</h3>
            <p className="mb-4">
              Garantimos a qualidade de todos os nossos produtos. Caso identifique qualquer avaria no ato da entrega, recuse o recebimento e entre em contato imediatamente com nossa equipe.
            </p>
            <p>
              Para devoluções por arrependimento (compras online), o prazo é de 7 dias corridos após o recebimento, conforme Código de Defesa do Consumidor, desde que o produto esteja em sua embalagem original e sem indícios de uso.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Policies;
