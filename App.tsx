import React from 'react';
import {
  StatusBar
} from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { CartProvider } from './src/contexts/cart';
import Toast from 'react-native-toast-message';

StatusBar.setHidden(true);

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};

function App() {
  return (
    <>
      <CartProvider>
      <StatusBar translucent hidden backgroundColor='transparent' />
          <NavigationContainer theme={navTheme}>
          <AppNavigation />
          <Toast />
        </NavigationContainer>
      </CartProvider>
    </>
  );
}

export default App;
