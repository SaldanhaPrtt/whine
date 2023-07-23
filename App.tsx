import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './src/pages/Home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
StatusBar.setHidden(true);

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
}

export default App;
