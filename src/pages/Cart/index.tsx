import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import wine_png from '../../assets/PNG/wine_png.png';
import { useCart } from '../../contexts/cart';

const CartItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={wine_png} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{"label"}</Text>
        <Text style={styles.price}>{"price"}</Text>
      </View>
      <View style={styles.counterContainer}>
        <MinusIcon />
        <Text style={styles.counter}>1</Text>
        <PlusIcon />
      </View>
    </View>
  );
}


export default function Cart({ navigation, route }: any) {
  const { products, addToCart, removeFromCart, clearCart }: any = useCart();
  return (
    <View style={styles.container}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </View>
  );
};