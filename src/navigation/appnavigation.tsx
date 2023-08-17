import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Header from '../components/Header';
import PickNavigation from './PickNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 300 } },
          close: { animation: 'timing', config: { duration: 300 } },
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pick" component={PickNavigation} />
    </Stack.Navigator>
  );
}

export default AppNavigation;