import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8 col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif text-stone-100 tracking-widest uppercase">{BRAND_NAME}</h3>
            <p className="text-stone-500 text-sm leading-7 font-light">
              Elevando o padrão do design de interiores com peças exclusivas que unem arte, conforto e sofisticação atemporal.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-600 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-stone-600 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-stone-600 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-stone-100 font-sans text-xs uppercase tracking-luxury font-bold mb-8">Explorar</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/ambientes" className="hover:text-gold-500 transition-colors">Ambientes</Link></li>
              <li><Link to="/produtos" className="hover:text-gold-500 transition-colors">Catálogo Completo</Link></li>
              <li><Link to="/sobre" className="hover:text-gold-500 transition-colors">Nossa História</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-sans text-xs uppercase tracking-luxury font-bold mb-8">Legal</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li><Link to="/politicas" className="hover:text-gold-500 transition-colors">Privacidade & Cookies</Link></li>
              <li><Link to="/politicas" className="hover:text-gold-500 transition-colors">Termos de Uso</Link></li>
              <li><Link to="/politicas" className="hover:text-gold-500 transition-colors">Trocas e Devoluções</Link></li>
              <li><Link to="/admin" className="hover:text-gold-500 transition-colors">Área Restrita</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-sans text-xs uppercase tracking-luxury font-bold mb-8">Concierge</h4>
            <ul className="space-y-6 text-stone-500 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-1" />
                <span>Av. Europa, 1234 - Jardins<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <span>+55 (11) 3030-0000</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <span>concierge@maisonlux.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600">
          <p>&copy; 2024 {BRAND_NAME}. Excellence in Design.</p>
          <p className="mt-4 md:mt-0">Desenvolvido para alta performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;