import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import styles from './styles';

type Props = {
  navigation: any;
  route: any;
};

export default function FooterNavigator({ navigation, route }: Props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'search', title: 'Search', icon: 'magnify' },
    { key: 'cart', title: 'Cart', icon: 'cart' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <Text>Home</Text>,
    search: () => <Text>Search</Text>,
    cart: () => <Text>Cart</Text>,
    profile: () => <Text>Profile</Text>,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bar}
      activeColor="#FFC107"
      inactiveColor="#FFFFFF"
    />
  );
}