import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';

export default function PickForYouBanner({navigation}: any) {
  const handlePress = () => {
    navigation.navigate('Pick');
  }
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>Te Ajudamos a Escolher</Text>
    </Pressable>
  );
}