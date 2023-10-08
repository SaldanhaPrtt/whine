import React, { createContext, useContext, useEffect, useState } from 'react';
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

  const getUser = async () => {
    const user = await getData('user');
    if (user) {
      setUser(user);
    }
  };

  const setUserContext = async (user: User) => {
    await storeData('user', user);
    setUser(user);
  };

  const removeUserContext = async () => {
    await removeData('user');
    setUser(null);
  };

  const addAddress = async (address: any) => {
    const user = await getData('user');
    if (user) {
      user.addresses.push(address);
      await storeData('user', user);
      setUser(user);
    }
  }

  const removeAddress = async (address: any) => {
    const user = await getData('user');
    if (user) {
      user.addresses = user.addresses.filter((item: any) => item.name !== address.name);
      await storeData('user', user);
      setUser(user);
    }
  }

  useEffect(() => {
    getUser();
  },[]);

  return (
    <UserContext.Provider value={{
      user,
      setUserContext,
      removeUserContext,
      addAddress,
      removeAddress,
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