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
  const [cartProducts, setCartProducts] = useState<Wine[]>([]);

  const addToCart = (product: Wine) => {
    console.log('addedProduct', product)
    if (cartProducts.find(item => item.id === product.id)) {
      setCartProducts(cartProducts.map(item => item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item));
    } else {
      setCartProducts([...cartProducts, product]);
    }
  }
  
  const removeFromCart = (productId: string) => {
    setCartProducts(cartProducts.filter(item => item.id !== productId));  
  }

  const clearCart = () => {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{
      cartProducts,
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