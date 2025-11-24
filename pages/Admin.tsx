import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import Button from '../components/Button';
import { Product, Environment } from '../types';
import { Trash2, Edit, Plus, X, Search, Package, LayoutDashboard, Sofa } from 'lucide-react';
import { CATEGORIES } from '../constants';

type AdminView = 'products' | 'environments';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [currentView, setCurrentView] = useState<AdminView>('products');
  
  const { 
    products, deleteProduct, addProduct, updateProduct,
    environments, deleteEnvironment, addEnvironment, updateEnvironment
  } = useProducts();
  
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [editingEnvironment, setEditingEnvironment] = useState<Partial<Environment> | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta (Dica: admin123)');
    }
  };

  // --- Product Handlers ---
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (editingProduct.id) {
      updateProduct(editingProduct as Product);
    } else {
      const newId = Math.random().toString(36).substr(2, 9);
      addProduct({
        ...editingProduct,
        id: newId,
        secondaryImages: [],
      } as Product);
    }
    setEditingProduct(null);
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setEditingProduct(prev => ({ ...prev, [e.target.name]: value }));
  };

  // --- Environment Handlers ---
  const handleSaveEnvironment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingEnvironment) return;

    if (editingEnvironment.id) {
      updateEnvironment(editingEnvironment as Environment);
    } else {
      const newId = Math.random().toString(36).substr(2, 9);
      addEnvironment({
        ...editingEnvironment,
        id: newId,
        // Auto-generate slug if simple
        slug: editingEnvironment.name || 'novo-ambiente', 
      } as Environment);
    }
    setEditingEnvironment(null);
  }

  const handleEnvironmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingEnvironment(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // --- Filters ---
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredEnvironments = environments.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Render ---

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-stone-950">
        <div className="bg-stone-900/50 p-12 backdrop-blur-md border border-white/5 w-full max-w-md text-center">
          <div className="mb-8">
             <h2 className="text-3xl font-serif text-stone-100 mb-2">Maison Lux</h2>
             <p className="text-stone-500 text-sm uppercase tracking-widest">Área Administrativa</p>
          </div>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Senha de Acesso" 
              className="w-full bg-stone-950 p-4 text-stone-200 border border-stone-800 mb-6 outline-none focus:border-gold-500 text-center tracking-widest transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button fullWidth type="submit" variant="primary">Acessar Painel</Button>
            <p className="mt-4 text-stone-600 text-xs">Dica: admin123</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-stone-950 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-stone-900/30 hidden lg:block fixed h-full top-24 left-0">
        <div className="p-6">
          <h3 className="text-stone-500 text-xs uppercase tracking-widest font-bold mb-6">Menu</h3>
          <nav className="space-y-2">
            <button 
              onClick={() => setCurrentView('products')}
              className={`w-full flex items-center gap-3 p-3 rounded-sm cursor-pointer transition-colors ${currentView === 'products' ? 'text-gold-500 bg-gold-500/10' : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'}`}
            >
              <LayoutDashboard size={18} />
              <span className="text-sm font-medium">Produtos</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('environments')}
              className={`w-full flex items-center gap-3 p-3 rounded-sm cursor-pointer transition-colors ${currentView === 'environments' ? 'text-gold-500 bg-gold-500/10' : 'text-stone-400 hover:text-stone-200 hover:bg-white/5'}`}
            >
              <Sofa size={18} />
              <span className="text-sm font-medium">Ambientes</span>
            </button>

            <div className="flex items-center gap-3 text-stone-400 hover:text-stone-200 p-3 rounded-sm cursor-pointer transition-colors opacity-50">
               <Package size={18} />
               <span className="text-sm font-medium">Pedidos (Demo)</span>
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-serif text-stone-100 mb-2">
              {currentView === 'products' ? 'Gerenciar Catálogo' : 'Gerenciar Ambientes'}
            </h1>
            <p className="text-stone-500 font-light">
              {currentView === 'products' 
                ? `Total de ${products.length} peças cadastradas.` 
                : `Total de ${environments.length} ambientes cadastrados.`}
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={16} />
              <input 
                type="text" 
                placeholder={currentView === 'products' ? "Buscar produto..." : "Buscar ambiente..."}
                className="w-full bg-stone-900 border border-stone-800 py-3 pl-10 pr-4 text-stone-300 focus:border-gold-500 outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {currentView === 'products' ? (
              <Button onClick={() => setEditingProduct({ name: '', price: 0, category: CATEGORIES[0], environment: environments[0]?.name || '', isFeatured: false, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000' })}>
                <Plus size={16} /> <span className="hidden md:inline">Novo Produto</span>
              </Button>
            ) : (
              <Button onClick={() => setEditingEnvironment({ name: '', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000' })}>
                <Plus size={16} /> <span className="hidden md:inline">Novo Ambiente</span>
              </Button>
            )}
          </div>
        </div>

        {/* --- PRODUCTS VIEW --- */}
        {currentView === 'products' && (
          <>
            {/* Modal Product */}
            {editingProduct && (
              <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-stone-900 w-full max-w-3xl p-8 shadow-2xl border border-stone-700 animate-fade-in max-h-[90vh] overflow-y-auto custom-scrollbar">
                  <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
                    <h3 className="text-2xl font-serif text-stone-100">{editingProduct.id ? 'Editar Peça' : 'Nova Peça'}</h3>
                    <button onClick={() => setEditingProduct(null)} className="text-stone-400 hover:text-white"><X /></button>
                  </div>
                  
                  <form onSubmit={handleSaveProduct} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Nome do Produto</label>
                        <input name="name" value={editingProduct.name || ''} onChange={handleProductChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors" required />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Preço (R$)</label>
                        <input type="number" name="price" value={editingProduct.price || 0} onChange={handleProductChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Categoria</label>
                        <select name="category" value={editingProduct.category || ''} onChange={handleProductChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none appearance-none">
                          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Ambiente</label>
                        <select name="environment" value={editingProduct.environment || ''} onChange={handleProductChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none appearance-none">
                            {environments.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">URL da Imagem Principal</label>
                      <input name="image" value={editingProduct.image || ''} onChange={handleProductChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors text-sm font-mono" required />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Descrição Curta</label>
                      <input name="shortDescription" value={editingProduct.shortDescription || ''} onChange={handleProductChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors" />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Descrição Completa</label>
                      <textarea name="fullDescription" value={editingProduct.fullDescription || ''} onChange={handleProductChange} rows={4} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors" />
                    </div>

                    <div className="flex items-center gap-3 bg-stone-950 p-4 border border-stone-800">
                      <input type="checkbox" name="isFeatured" checked={editingProduct.isFeatured || false} onChange={handleProductChange} id="featured" className="w-5 h-5 accent-gold-500" />
                      <label htmlFor="featured" className="text-stone-300 text-sm cursor-pointer select-none">Exibir na Home (Destaque)</label>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" fullWidth>Salvar Alterações</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* List Product */}
            <div className="bg-stone-900 border border-white/5 shadow-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-800 bg-stone-950 text-stone-500 text-[10px] uppercase tracking-widest">
                    <th className="p-6 font-bold">Produto</th>
                    <th className="p-6 font-bold hidden sm:table-cell">Categoria</th>
                    <th className="p-6 font-bold hidden md:table-cell">Ambiente</th>
                    <th className="p-6 font-bold">Preço</th>
                    <th className="p-6 font-bold text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map(p => (
                    <tr key={p.id} className="border-b border-stone-800 hover:bg-stone-800/30 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <img src={p.image} alt="" className="w-16 h-16 object-cover rounded-sm border border-stone-800" />
                          <div>
                            <div className="text-stone-200 font-medium font-serif">{p.name}</div>
                            {p.isFeatured && <span className="text-gold-500 text-[10px] uppercase tracking-wide">★ Destaque</span>}
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-stone-400 text-sm hidden sm:table-cell">{p.category}</td>
                      <td className="p-6 text-stone-400 text-sm hidden md:table-cell">{p.environment}</td>
                      <td className="p-6 text-stone-300 font-mono">R$ {p.price.toLocaleString()}</td>
                      <td className="p-6 text-right">
                        <div className="flex gap-2 justify-end opacity-50 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setEditingProduct(p)} className="p-2 text-stone-400 hover:text-gold-500 hover:bg-stone-800 rounded-sm transition-colors"><Edit size={18} /></button>
                          <button onClick={() => deleteProduct(p.id)} className="p-2 text-stone-400 hover:text-red-500 hover:bg-stone-800 rounded-sm transition-colors"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* --- ENVIRONMENTS VIEW --- */}
        {currentView === 'environments' && (
           <>
            {/* Modal Environment */}
            {editingEnvironment && (
               <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                 <div className="bg-stone-900 w-full max-w-xl p-8 shadow-2xl border border-stone-700 animate-fade-in">
                   <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
                     <h3 className="text-2xl font-serif text-stone-100">{editingEnvironment.id ? 'Editar Ambiente' : 'Novo Ambiente'}</h3>
                     <button onClick={() => setEditingEnvironment(null)} className="text-stone-400 hover:text-white"><X /></button>
                   </div>
                   
                   <form onSubmit={handleSaveEnvironment} className="space-y-6">
                     <div>
                       <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">Nome do Ambiente</label>
                       <input name="name" value={editingEnvironment.name || ''} onChange={handleEnvironmentChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors" required />
                     </div>
                     <div>
                       <label className="block text-[10px] uppercase tracking-widest text-gold-500 mb-2">URL da Imagem</label>
                       <input name="image" value={editingEnvironment.image || ''} onChange={handleEnvironmentChange} className="w-full bg-stone-950 p-4 border border-stone-800 text-stone-200 focus:border-gold-500 outline-none transition-colors text-sm font-mono" required />
                     </div>
                     
                     <div className="pt-4">
                       <Button type="submit" fullWidth>Salvar Ambiente</Button>
                     </div>
                   </form>
                 </div>
               </div>
            )}

            {/* List Environments */}
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {filteredEnvironments.map(env => (
                 <div key={env.id} className="bg-stone-900 border border-stone-800 group relative overflow-hidden">
                    <div className="h-48 overflow-hidden relative">
                       <img src={env.image} alt={env.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <button onClick={() => setEditingEnvironment(env)} className="bg-stone-100 p-2 rounded-full hover:bg-gold-500 transition-colors"><Edit size={16} className="text-stone-900" /></button>
                          <button onClick={() => deleteEnvironment(env.id)} className="bg-stone-100 p-2 rounded-full hover:bg-red-500 transition-colors"><Trash2 size={16} className="text-stone-900" /></button>
                       </div>
                    </div>
                    <div className="p-6">
                       <h3 className="text-xl font-serif text-stone-100 mb-1">{env.name}</h3>
                       <p className="text-xs text-stone-500 font-mono">{env.id}</p>
                    </div>
                 </div>
               ))}
               {filteredEnvironments.length === 0 && (
                 <div className="col-span-full text-center text-stone-500 py-12">Nenhum ambiente encontrado.</div>
               )}
             </div>
           </>
        )}

      </main>
    </div>
  );
};

export default Admin;