import React, { createContext, useContext, useState } from 'react';
import { getData, storeData, removeData } from '../services/AsyncStorage';
const UserContext = createContext({});

type User = {
  name: string,
  addresses: [
    {
      name: string,
      street: string,
      number: number,
      complement?: number,
      moniquer?: string
    }
  ]
}

export const UserProvider = ({ children }: any) => {
  const [addresses, setAddresses] = useState();
  


  return (
    <UserContext.Provider value={{

    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be within an UserProvider');
  }
  return context;
};