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
      <ImageBackground source={small_product_image} style={styles.image}>
        <Text style={styles.label}>{text}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}