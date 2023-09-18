import React from 'react';
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
import SystemNavigationBar from 'react-native-system-navigation-bar';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import { CartProvider } from './src/contexts/cart';
import { createWinesTable } from './src/services/SQLite/Wines';
import { closeDatabase, getDatabase } from './src/services/SQLite/SQLite';
import Toast from 'react-native-toast-message';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
StatusBar.setHidden(true);

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const createTables = async () => {
  const db = await getDatabase();
  await createWinesTable(db);
  await closeDatabase(db as any);
}

createTables();

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

const softBarHeight = ExtraDimensions.getSoftMenuBarHeight();
const StatusBarHeight = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -StatusBarHeight,
    marginBottom: -StatusBarHeight - softBarHeight,
  },
});
