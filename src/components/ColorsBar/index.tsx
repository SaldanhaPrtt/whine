import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ColorsButton from '../ColorsButton';

import styles from './styles';
import normalize from 'react-native-normalize';
import WineGlassIcon from '../../assets/JSXAssets/WineGlassIcon';
import ChampagneIcon from '../../assets/JSXAssets/ChampagneIcon';

interface Props {
  label: string;
  onPress: () => void;
}

export default function ColorsBar() {
  const colorsArray = [
    'rgba(120, 0, 0, 0.5)',
  ];

  const OnPress = () => {
    
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
      <ColorsButton image={<WineGlassIcon color='red'/> as any} text="Tinto"  onPress={OnPress} />
      <ColorsButton image={<WineGlassIcon color='pink'/> as any} text="Rose"  onPress={OnPress} />
      <ColorsButton image={<WineGlassIcon color='rgba(160, 160, 0,0.30)'/> as any} text="Branco"  onPress={OnPress} />
      <ColorsButton image={<ChampagneIcon /> as any} text="Espumante" onPress={OnPress} />
    </ScrollView>
  );
}