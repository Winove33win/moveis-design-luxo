import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Environments from './pages/Environments';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Admin from './pages/Admin';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="ambientes" element={<Environments />} />
            <Route path="produtos" element={<Products />} />
            <Route path="produtos/:id" element={<ProductDetail />} />
            <Route path="contato" element={<Contact />} />
            <Route path="politicas" element={<Policies />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProductProvider>
  );
}

export default App;