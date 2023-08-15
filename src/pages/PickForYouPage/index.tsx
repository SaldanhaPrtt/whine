import React from 'react';
import { View, Text } from 'react-native';
import SquareButton from '../../components/SquareButton';
import styles from './styles';
import Header from '../../components/Header';

export default function PickForYouPage() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>PickForYouPage</Text>
      <SquareButton text="Test" color="red" />
    </View>
  );
}