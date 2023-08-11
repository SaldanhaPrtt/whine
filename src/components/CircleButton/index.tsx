import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

type Props = {
  text: string;
  color: string;
}

export default function CircleButton({ text, color }: Props) {
  const backgroundColor = color ? color : 'rgba(255, 255, 255, 0.1)';
  return (
    <TouchableHighlight style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.label}>{text}</Text>
    </TouchableHighlight>
  );
}