import React, { createContext, useState } from 'react';

const CartContext = createContext({});

type Cart = {
  id: string,
  name: string,
  price: number,
  oldPrice: number,
  quantity: number,
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