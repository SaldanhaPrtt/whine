import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CircleButton from '../CircleButton';

import styles from './styles';

interface Props {
  label: string;
  onPress: () => void;
}

export default function TypesBar() {
  const colorsArray = [
    'rgba(120, 0, 0, 0.5)',
  ];
  return (
    <ScrollView 
      style={styles.container} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      overScrollMode='never'
    >
      <CircleButton text="Merlot" color={colorsArray[0]} />
      <CircleButton text="Cabernet Sauvignon" color={colorsArray[0]} />
      <CircleButton text="Malbec" color={colorsArray[0]} />
      <CircleButton text="Nebbiolo" color={colorsArray[0]} />
      <CircleButton text="Tempranillo" color={colorsArray[0]} />
      <CircleButton text="Carmenere" color={colorsArray[0]} />
      <CircleButton text="Sauvignon Blanc" color={colorsArray[0]} />
      <CircleButton text="Chardonnay" color={colorsArray[0]} />
    </ScrollView>
  );
}