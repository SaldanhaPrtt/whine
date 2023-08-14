import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Header from '../components/Header';
import PickForYouPage from '../pages/PickForYouPage/inde';

const Stack = createStackNavigator();

const PickNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PickForYouPage" component={PickForYouPage} />
    </Stack.Navigator>
  );
}

export default PickNavigation;