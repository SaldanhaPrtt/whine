import React from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground, Pressable } from 'react-native';
import small_product_image from '../../assets/PNG/small_product_image.jpg';
import wine_png from '../../assets/PNG/wine_png.png';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import { Button } from 'react-native-paper';
import { useWine } from '../../contexts/wines';

type Props = {
  navigation: any;
  route: any;
  wine: any;
};

export default function ProductButton({ navigation, route, wine }: Props) {
  const { addToCart }: any = useWine();
  const handlePress = () => {
    navigation.navigate('ProductPage', {
      id: wine.id,
    });
  }
  return (
    <TouchableHighlight underlayColor={'rgb(50,50,50)'} style={styles.container} onPress={handlePress}>
      <View style={styles.itemsView}>
        <ImageBackground resizeMode='contain' source={wine.image ? {uri: wine.image} : wine_png} style={styles.image} borderRadius={8}/>
        <View style={styles.lowerView}>
          <View style={styles.pricesView}>
            <Text style={styles.label}>{wine.name}</Text>
            <Text style={styles.price}>R${wine.price}</Text>
            <Text style={styles.oldPrice}>R${wine.oldPrice}</Text>
          </View>
          <Button style={styles.button} mode="contained" onPress={() => addToCart(wine)}>
            <PlusIcon/>
          </Button>
        </View>
      </View>
    </TouchableHighlight>
  );
}