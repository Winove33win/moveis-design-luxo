import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col relative overflow-hidden lux-grid">
      <div className="orb-motion w-72 h-72 bg-gold-500/20 top-[-40px] left-6 rounded-full pointer-events-none" />
      <div className="orb-motion w-80 h-80 bg-amber-200/10 bottom-[-60px] right-[-10px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60 pointer-events-none" />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;