import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

export default function ProductPage({ navigation, route }: { navigation: any, route: any }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <Text>Product Page</Text>
    </View>
  );
}