import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

type Props = {
  text: string;
  color: string;
}

export default function CircleButton({ text }: Props) {
  return (
    <TouchableHighlight style={styles.container}>
      <Text style={styles.label}>{text}</Text>
    </TouchableHighlight>
  );
}