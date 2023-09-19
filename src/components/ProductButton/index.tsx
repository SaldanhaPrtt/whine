import React from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground, Pressable } from 'react-native';
import small_product_image from '../../assets/PNG/small_product_image.jpg';
import wine_png from '../../assets/PNG/wine_png.png';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';

type Props = {
  navigation: any;
  route: any;
  name: string;
  price: number;
  oldPrice?: number;
  year: string;
  grapes: string;
  country: string;
  region: string;
  description: string;
  image: string;
};

export default function ProductButton({ navigation, route, name, price, oldPrice, year, grapes, country, region, description, image }: Props) {

  const handlePress = () => {
    navigation.navigate('ProductPage', { 
      name:name,
      price:price,
      oldPrice: oldPrice ? oldPrice : null,
      year: year,
      grapes: grapes,
      country: country,
      region: region,
      description: description,
      image: image
    });
  }
  return (
    <TouchableHighlight style={styles.container}>
      <View style={styles.itemsView}>
        <ImageBackground source={image ? {uri:image} : wine_png} style={styles.image} />
        <Text style={styles.label}>{name}</Text>
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