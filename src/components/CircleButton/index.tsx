import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

export default function CircleButton({ text }: { text: string }) {
  return (
    <TouchableHighlight style={styles.container}>
      <Text style={styles.label}>{text}</Text>
    </TouchableHighlight>
  );
}