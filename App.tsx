import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Dimensions,
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
    background: 'transparent',
  },
};

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} barStyle="light-content" translucent={true}/>
      <CartProvider>
        <NavigationContainer theme={navTheme}>
          <AppNavigation />
        </NavigationContainer>
      </CartProvider>
      <Toast />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
