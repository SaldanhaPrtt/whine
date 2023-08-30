import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import SystemNavigationBar from 'react-native-system-navigation-bar';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
StatusBar.setHidden(true);
SystemNavigationBar.navigationHide();

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
      <NavigationContainer theme={navTheme}>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

const StatusBarHeight = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -StatusBarHeight,
    marginBottom: -StatusBarHeight,
  },
});
