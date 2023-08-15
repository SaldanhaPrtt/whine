import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';

import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
StatusBar.setHidden(true);

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
