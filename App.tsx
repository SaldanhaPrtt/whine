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
import { LogBox } from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
StatusBar.setHidden(true);
LogBox.ignoreLogs(['new NativeEventEmitter']);
SystemNavigationBar.navigationHide();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
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
