import React from 'react';
import {
  StatusBar, View
} from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { WineProvider } from './src/contexts/wines';
import Toast from 'react-native-toast-message';
import { UserProvider } from './src/contexts/user';

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
    <UserProvider>
      <WineProvider>
        <StatusBar translucent hidden backgroundColor='transparent' />
        <NavigationContainer theme={navTheme}>
        <View style={{flex: 1}}>
          <AppNavigation />
        </View>
          <Toast />
        </NavigationContainer>
      </WineProvider>
    </UserProvider>
  );
}

export default App;
