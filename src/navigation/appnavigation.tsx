import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../pages/Home';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import RegisterWhine from '../pages/RegisterWhine';
import PickNavigation from './PickNavigation';
import ProductPage from '../pages/ProductPage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted'
        }}
      />
      <Stack.Screen 
        name="Pick" 
        component={PickNavigation}
      />
      <Stack.Screen 
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          gestureEnabled: true,
          // gestureDirection: 'horizontal',
          ...TransitionPresets.BottomSheetAndroid
        }}
      />
      <Stack.Screen 
        name="RegisterWhine"
        component={RegisterWhine}
      />
      <Stack.Screen
        name="ProductPage"
        component={ProductPage}
        options={{
          headerShown: false,
          gestureEnabled: true,
          // gestureDirection: 'horizontal-inverted',
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;