import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { ContactForm } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    type: 'Residencial',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Fale Conosco" subtitle="Atendimento Personalizado" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-stone-400 text-lg mb-8">
              Estamos à disposição para transformar seu projeto em realidade. Entre em contato por formulário, telefone ou visite nosso showroom.
            </p>

            <div className="flex items-start gap-4">
              <div className="bg-stone-800 p-3 rounded-full text-gold-500"><MapPin size={24} /></div>
              <div>
                <h4 className="text-stone-100 font-serif text-xl mb-1">Showroom</h4>
                <p className="text-stone-400">Av. Europa, 1234 - Jardins<br />São Paulo - SP, 01449-001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-stone-800 p-3 rounded-full text-gold-500"><Phone size={24} /></div>
              <div>
                <h4 className="text-stone-100 font-serif text-xl mb-1">Telefone / WhatsApp</h4>
                <p className="text-stone-400">+55 (11) 99999-9999</p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-gold-500 text-sm hover:underline">Iniciar conversa</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-stone-800 p-3 rounded-full text-gold-500"><Mail size={24} /></div>
              <div>
                <h4 className="text-stone-100 font-serif text-xl mb-1">E-mail</h4>
                <p className="text-stone-400">contato@maisonlux.com.br</p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="bg-stone-800 p-3 rounded-full text-gold-500"><Clock size={24} /></div>
              <div>
                <h4 className="text-stone-100 font-serif text-xl mb-1">Horário</h4>
                <p className="text-stone-400">Seg a Sex: 10h às 19h<br />Sáb: 10h às 16h</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-900 p-8 md:p-12 border border-stone-800">
            {submitted ? (
              <div className="text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-serif text-stone-100 mb-2">Mensagem Enviada!</h3>
                <p className="text-stone-400 mb-8">Nossa equipe entrará em contato em breve.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Enviar outra mensagem</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-stone-400 text-sm mb-2 uppercase tracking-wider">Nome Completo</label>
                  <input 
                    required 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange}
                    className="w-full bg-stone-950 border border-stone-800 text-stone-200 p-4 focus:border-gold-500 outline-none transition-colors" 
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="block text-stone-400 text-sm mb-2 uppercase tracking-wider">E-mail</label>
                  <input 
                    required 
                    type="email"
                    name="email" 
                    value={form.email} 
                    onChange={handleChange}
                    className="w-full bg-stone-950 border border-stone-800 text-stone-200 p-4 focus:border-gold-500 outline-none transition-colors" 
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-400 text-sm mb-2 uppercase tracking-wider">Telefone</label>
                    <input 
                      required 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange}
                      className="w-full bg-stone-950 border border-stone-800 text-stone-200 p-4 focus:border-gold-500 outline-none transition-colors" 
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 text-sm mb-2 uppercase tracking-wider">Tipo</label>
                    <select 
                      name="type" 
                      value={form.type} 
                      onChange={handleChange}
                      className="w-full bg-stone-950 border border-stone-800 text-stone-200 p-4 focus:border-gold-500 outline-none transition-colors appearance-none"
                    >
                      <option value="Residencial">Residencial</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Parceria">Parceria (Arquiteto)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-stone-400 text-sm mb-2 uppercase tracking-wider">Mensagem</label>
                  <textarea 
                    required 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-stone-950 border border-stone-800 text-stone-200 p-4 focus:border-gold-500 outline-none transition-colors" 
                    placeholder="Conte um pouco sobre seu projeto..."
                  ></textarea>
                </div>
                <Button type="submit" fullWidth>Enviar Mensagem</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
