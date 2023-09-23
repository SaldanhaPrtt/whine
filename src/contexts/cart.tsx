import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({});


type Wine = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  image: string;
  quantity: number;
};

export const CartProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Wine[]>([]);

  const addToCart = (product: Wine) => {
    if (products.find(item => item.id === product.id)) {
      setProducts(products.map(item => item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item));
    }
    setProducts([...products, product]);
  }
  
  const removeFromCart = (productId: string) => {
    setProducts(products.filter(item => item.id !== productId));  
  }

  const clearCart = () => {
    setProducts([]);
  }

  return (
    <CartContext.Provider value={{
      products,
      addToCart,
      removeFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be within an CartProvider');
  }
  return context;
};