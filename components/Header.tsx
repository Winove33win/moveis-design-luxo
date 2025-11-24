import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Ambientes', path: '/ambientes' },
    { name: 'Coleção', path: '/produtos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled || isOpen
            ? 'bg-stone-950/90 backdrop-blur-md py-4 border-white/5' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="relative z-50 group">
            <span className="text-2xl md:text-3xl font-serif text-stone-100 group-hover:text-gold-500 transition-colors tracking-widest uppercase">
              {BRAND_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative group py-2 ${
                  location.pathname === link.path ? 'text-gold-500' : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-gold-500 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
             <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-300 hover:text-gold-500 transition-colors group"
            >
              <span className="text-xs uppercase tracking-widest font-bold group-hover:mr-2 transition-all">WhatsApp</span>
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone-200 z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-stone-950 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-3xl font-serif text-stone-300 hover:text-gold-500 transition-colors font-light"
          >
            {link.name}
          </Link>
        ))}
        <div className="h-[1px] w-20 bg-stone-800 my-8"></div>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="flex items-center gap-3 text-gold-500 border border-gold-500 px-8 py-4 rounded-sm hover:bg-gold-500 hover:text-stone-950 transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <MessageCircle size={18} />
          Falar no WhatsApp
        </a>
      </div>
    </>
  );
};

export default Header;