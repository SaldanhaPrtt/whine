import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CircleButton from '../TypeButton';

import styles from './styles';
import normalize from 'react-native-normalize';

interface Props {
  label: string;
  onPress: () => void;
}

export default function TypesBar() {
  const colorsArray = [
    'rgba(120, 0, 0, 0.5)',
  ];

  const OnPress = () => {
    console.log('Pressed');
  }
  return (
    <ScrollView 
      style={styles.container} 
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      snapToInterval={normalize(90)}
      scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}
      overScrollMode='never'
      indicatorStyle='black'
    >
      <CircleButton text="Merlot" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Cabernet Sauvignon" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Malbec" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Nebbiolo" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Tempranillo" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Carmenere" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Sauvignon Blanc" color={colorsArray[0]} onPress={OnPress} />
      <CircleButton text="Chardonnay" color={colorsArray[0]} onPress={OnPress} />
    </ScrollView>
  );
}