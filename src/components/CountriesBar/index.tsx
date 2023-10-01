import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import normalize from 'react-native-normalize';
import WineGlassIcon from '../../assets/JSXAssets/WineGlassIcon';
import ChampagneIcon from '../../assets/JSXAssets/ChampagneIcon';
import CountryButton from '../CountryButton';

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
      <CountryButton countryCode='br' text="Tinto"  onPress={OnPress} />
      <CountryButton countryCode='fr' text="Rose"  onPress={OnPress} />
      <CountryButton countryCode='pt' text="Branco"  onPress={OnPress} />
      <CountryButton countryCode='hu' text="Espumante" onPress={OnPress} />
      <CountryButton countryCode='it' text="Espumante" onPress={OnPress} />
      <CountryButton countryCode='us' text="Espumante" onPress={OnPress} />
      <CountryButton countryCode='cl' text="Espumante" onPress={OnPress} />
      <CountryButton countryCode='ar' text="Espumante" onPress={OnPress} />
      <CountryButton countryCode='uy' text="Espumante" onPress={OnPress} />
    </ScrollView>
  );
}