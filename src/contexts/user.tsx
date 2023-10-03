import React, { createContext, useContext, useState } from 'react';
import { getData, storeData, removeData } from '../services/AsyncStorage';
const UserContext = createContext({});

type User = {
  name: string,
  age: number,
  dateOfBirth: string,
  cpf: string,
  email: string,
  role: string,
  clientType?: string,
  token: string,
  addresses?: [
    {
      name: string,
      street: string,
      number: number,
      complement?: number,
      moniquer?: string
    }
  ],
  selectedAdress?: string,
}

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{
      user,
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