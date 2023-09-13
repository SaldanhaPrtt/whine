import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

type Props = {
  text: string;
  image: string;
  onPress: () => void;
}

export default function ColorsButton({ text, image, onPress }: Props) {
  return (
    <TouchableHighlight style={[styles.container]} onPress={onPress}>
      <View>
        {image}
        <Text style={styles.label}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}