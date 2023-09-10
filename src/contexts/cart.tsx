import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({});

type Cart = {
  id: string;
  name: string;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  picture: string;
}

export const CartProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Cart[]>([]);

  const addToCart = (product: Cart) => {
    setProducts([...products, product]);
  }

  const removeFromCart = (productId: string) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
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