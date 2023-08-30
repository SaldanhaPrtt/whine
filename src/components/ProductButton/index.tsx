import React from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground } from 'react-native';
import small_product_image from '../../assets/PNG/small_product_image.jpg';
import styles from './styles';

type Props = {
  navigation: any;
  route: any;
  text: string;
  color: string;
  price: number;
  oldPrice: number;
};

export default function ProductButton({ navigation, route, text, color, price, oldPrice }: Props) {

  const handlePress = () => {
    console.log(`You clicked ${text} button`);
    navigation.navigate('ProductPage', { text, color, price, oldPrice });
  }
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