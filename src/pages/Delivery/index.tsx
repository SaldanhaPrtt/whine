import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { useUser } from '../../contexts/user';
import MapView from 'react-native-maps';

export default function Delivery({navigation, route} : any) {
  const { user }: any = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido</Text>
      {/* <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      /> */}
    </View>
  );
}