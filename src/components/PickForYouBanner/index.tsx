import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

export default function PickForYouBanner() {
  return (
    <Pressable style={styles.container} >
      <Text>Escolha para você</Text>
    </Pressable>
  );
}