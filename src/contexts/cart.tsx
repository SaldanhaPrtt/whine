import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({});


type Wine = {
  id: number;
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
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product: Wine) => {
    if (cartProducts.find(item => item.id === product.id)) {
      setCartProducts(cartProducts.map(item => item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item));
      setTotalPrice(totalPrice + product.price);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 } ]);
      setTotalPrice(totalPrice + product.price);
    }
  } 
  
  const removeFromCart = (product: Wine) => {
    if (cartProducts.find(item => item.id === product.id && item.quantity > 1)) {
      setCartProducts(cartProducts.map(item => item.id === product.id ? { ...product, quantity: item.quantity - 1 } : item));
      setTotalPrice(totalPrice - product.price);
    } else {
      setCartProducts(cartProducts.filter(item => item.id !== product.id));
      setTotalPrice(totalPrice - product.price);
    }  
  }

  const clearCart = () => {
    setCartProducts([]);
    setTotalPrice(0);
  }

  return (
    <CartContext.Provider value={{
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart,
      totalPrice,
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