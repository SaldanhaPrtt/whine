import React from 'react';
import { View, Text } from 'react-native';
import SquareButton from '../../components/ProductButton';
import styles from './styles';
import Header from '../../components/Header';

export default function Profile({navigation, route} : any) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <Text>Profile</Text>
    </View>
  );
}