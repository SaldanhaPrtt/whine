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
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const navigation = useNavigation();
  const route = useNavigation().getState();
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
        headerShown: true,
        gestureEnabled: true,
        animationEnabled: true,
      }}
    >
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted'
        }}
      />
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted'
        }}
      />
      <Stack.Screen 
        name="Pick" 
        component={PickNavigation}
        options={{
          header: ({navigation, route}) => <Header navigation={navigation} route={route} />,
          headerShown: true,
          gestureEnabled: true,
          // gestureDirection: 'horizontal-inverted',
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
          // gestureDirection: 'horizontal',
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
          // gestureDirection: 'horizontal-inverted',
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
          // gestureDirection: 'horizontal-inverted',
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
          // gestureDirection: 'horizontal-inverted',
          ...TransitionPresets.SlideFromRightIOS
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;