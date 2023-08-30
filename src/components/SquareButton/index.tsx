import React from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground } from 'react-native';
import small_product_image from '../../assets/PNG/small_product_image.jpg';
import styles from './styles';

type Props = {
  text: string;
  color: string;
  price: number;
  oldPrice: number;
};

export default function SquareButton({ text, color, price, oldPrice }: Props) {
  return (
    <TouchableHighlight style={[styles.container]}>
      <View>
          <ImageBackground source={small_product_image} style={styles.image} borderTopLeftRadius={6} borderTopRightRadius={6} />
          <Text style={styles.label}>{text}</Text>
          <View style={styles.pricesView}>
            <Text style={styles.price}>R$ {price}</Text>
            <Text style={styles.oldPrice}>R$ {oldPrice}</Text>
          </View>
      </View>
    </TouchableHighlight>
  );
}