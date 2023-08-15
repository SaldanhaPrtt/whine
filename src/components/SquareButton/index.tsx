import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

export default function SquareButton({ text, color }: any) {
  return (
    <TouchableHighlight style={[styles.container]}>
      <Text style={styles.label}>{text}</Text>
    </TouchableHighlight>
  );
}