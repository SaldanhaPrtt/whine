import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '../pages/Home';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import RegisterWhine from '../pages/RegisterWhine';
import PickNavigation from './PickNavigation';
import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
        headerShown: true,
        gestureEnabled: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="Pick" 
        component={PickNavigation}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
      <Stack.Screen 
        name="Profile"
        component={Profile}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.BottomSheetAndroid
        }}
      />
      <Stack.Screen 
        name="RegisterWhine"
        component={RegisterWhine}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
      <Stack.Screen
        name="ProductPage"
        component={ProductPage}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;