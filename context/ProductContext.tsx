import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Environment } from '../types';
import { initialProducts, initialEnvironments } from '../data/mockData';

interface ProductContextType {
  products: Product[];
  environments: Environment[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  addEnvironment: (env: Environment) => void;
  updateEnvironment: (env: Environment) => void;
  deleteEnvironment: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [environments, setEnvironments] = useState<Environment[]>(initialEnvironments);

  // Product Logic
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getProductById = (id: string) => {
    return products.find((p) => p.id === id);
  };

  // Environment Logic
  const addEnvironment = (env: Environment) => {
    setEnvironments((prev) => [...prev, env]);
  };

  const updateEnvironment = (updatedEnv: Environment) => {
    setEnvironments((prev) =>
      prev.map((e) => (e.id === updatedEnv.id ? updatedEnv : e))
    );
  };

  const deleteEnvironment = (id: string) => {
    setEnvironments((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      environments,
      addProduct, 
      updateProduct, 
      deleteProduct, 
      getProductById,
      addEnvironment,
      updateEnvironment,
      deleteEnvironment
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};