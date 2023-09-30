import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ColorsButton from '../ColorsButton';
import CountryButton from '../CountryButton';
import styles from './styles';
import normalize from 'react-native-normalize';
import WineGlassIcon from '../../assets/JSXAssets/WineGlassIcon';
import ChampagneIcon from '../../assets/JSXAssets/ChampagneIcon';
import CountryFlag from "react-native-country-flag";

interface Props {
  label: string;
  onPress: () => void;
}

export default function CountriesBar() {
  const colorsArray = [
    'rgba(120, 0, 0, 0.5)',
  ];

  const OnPress = () => {
    
  }
  return (
    <ScrollView 
      style={styles.container} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      snapToInterval={normalize(90)}
      scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}
      overScrollMode='never'
    >
      <CountryButton image={<WineGlassIcon color='red'/> as any} text="Tinto"  onPress={OnPress} />
      <CountryButton image={<WineGlassIcon color='pink'/> as any} text="Rose"  onPress={OnPress} />
      <CountryButton image={<WineGlassIcon color='rgba(160, 160, 0,0.30)'/> as any} text="Branco"  onPress={OnPress} />
      <CountryButton image={<ChampagneIcon /> as any} text="Espumante" onPress={OnPress} />
    </ScrollView>
  );
}