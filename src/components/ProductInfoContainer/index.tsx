import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

interface Props {
  label: string;
  price: string;
  oldPrice: string;
  image: any;
}

export default function ProductInfoContainer({ label, price, oldPrice, image }: Props) {
  return (
    <View style={styles.container}>

    </View>
  );
};