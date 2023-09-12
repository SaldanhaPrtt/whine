import React from 'react';
import { View, Text } from 'react-native';
import SquareButton from '../../components/ProductButton';
import styles from './styles';
import Header from '../../components/Header';
import { Button } from 'react-native-paper';
import WineGlassIcon from '../../assets/JSXAssets/WineGlassIcon';

export default function Profile({navigation, route} : any) {
  return (
    <View style={styles.container}>
      <WineGlassIcon />
      <Button mode='contained-tonal' onPress={() => navigation.navigate('RegisterWhine')}>Registrar Vinho</Button>
    </View>
  );
}