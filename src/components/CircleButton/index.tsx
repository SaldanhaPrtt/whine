import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

type Props = {
  text: string;
  color: string;
  onPress: () => void;
}

export default function CircleButton({ text, color, onPress }: Props) {
  return (
    <TouchableHighlight style={[styles.container]} onPress={onPress}>
      <Text style={styles.label}>{text}</Text>
    </TouchableHighlight>
  );
}