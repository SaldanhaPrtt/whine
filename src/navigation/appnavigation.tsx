import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../pages/Home';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import RegisterWhine from '../pages/RegisterWhine';
import PickNavigation from './PickNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pick" component={PickNavigation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RegisterWhine" component={RegisterWhine} />
    </Stack.Navigator>
  );
}

export default AppNavigation;