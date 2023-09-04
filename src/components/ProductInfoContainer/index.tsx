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
      <View style={styles.upperContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.lowerView}>
          <View style={styles.pricesView}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.oldPrice}>{oldPrice}</Text>
          </View>
          <View style={styles.plusIconView}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};