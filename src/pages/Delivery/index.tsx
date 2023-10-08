import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { useUser } from '../../contexts/user';

export default function Delivery({navigation, route} : any) {
  const { user }: any = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido</Text>
    </View>
  );
}