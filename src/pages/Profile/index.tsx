import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';

export default function Profile({navigation, route} : any) {
  return (
    <View style={styles.container}>
      <Button mode='contained-tonal' onPress={() => navigation.navigate('RegisterWhine')}>Registrar Vinho</Button>
    </View>
  );
}