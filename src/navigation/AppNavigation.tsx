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
import Delivery from '../pages/Delivery';
import { useUser } from '../contexts/user';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const { user }: any = useUser();

  return (
    <Stack.Navigator
      initialRouteName={user ? 'Home' : 'Login'}
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
      <Stack.Screen
        name="Delivery"
        component={Delivery}
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