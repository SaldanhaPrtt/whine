import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllWines } from '../services/SQLite/Wines'
import { closeDatabase, getDatabase } from '../services/SQLite/SQLite';
import { useUser } from './user';

const WineContext = createContext({});


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

export const WineProvider = ({ children }: any) => {
  const { user }: any = useUser();
  const [wines, setWines] = useState<Wine[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [cartProducts, setCartProducts] = useState<Wine[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadData = async () => {
    if (!loaded) {
      try {
        const db = await getDatabase();
        const tempWines = await getAllWines(db);
        if (tempWines) {
          setWines(tempWines)
        }
        await closeDatabase(db);
        setLoaded(true);
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    loadData()
  }, []);

  useEffect(() => {
    loadData()
  }, [user]);

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
    <WineContext.Provider value={{
      wines,
      cartProducts,
      addToCart,
      removeFromCart,
      clearCart,
      totalPrice,
    }}>
      {children}
    </WineContext.Provider>
  );
};

export const useWine = () => {
  const context = useContext(WineContext);
  if (!context) {
    throw new Error('useWine must be within an WineProvider');
  }
  return context;
};