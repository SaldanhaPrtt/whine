import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import CountryFlag from "react-native-country-flag";

import styles from './styles';

type Props = {
  text: string;
  image: string;
  onPress: () => void;
}

export default function CountryButton({ text, image, onPress }: Props) {
  return (
    <TouchableHighlight style={[styles.container]} onPress={onPress}>
      <View>
        <CountryFlag isoCode="de" size={25} />
        <Text style={styles.label}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}