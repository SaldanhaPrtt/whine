import React from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground, Pressable } from 'react-native';
import small_product_image from '../../assets/PNG/small_product_image.jpg';
import wine_png from '../../assets/PNG/wine_png.png';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';

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
    <TouchableHighlight style={styles.container}>
      <View style={styles.itemsView}>
        <ImageBackground source={wine_png} style={styles.image} />
        <Text style={styles.label}>{text}</Text>
        <View style={styles.lowerView}>
          <View style={styles.pricesView}>
            <Text style={styles.price}>R$ {price}</Text>
            <Text style={styles.oldPrice}>R$ {oldPrice}</Text>
          </View>
          <Pressable style={styles.plusIconView} onPress={handlePress}>
            <PlusIcon />
          </Pressable>
        </View>
      </View>
    </TouchableHighlight>
  );
}