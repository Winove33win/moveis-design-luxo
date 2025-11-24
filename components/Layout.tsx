import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col">
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