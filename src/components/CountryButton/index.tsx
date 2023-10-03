import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import CountryFlag from "react-native-country-flag";

import styles from './styles';

type Props = {
  text: string;
  countryCode: string;
  onPress: () => void;
}

export default function CountryButton({ text, countryCode, onPress }: Props) {
  return (
    <TouchableHighlight style={[styles.container]} onPress={onPress}>
      <View style={styles.innerContainer}>
        <CountryFlag style={styles.flag} isoCode={countryCode} size={40} />
        <Text style={styles.label}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}