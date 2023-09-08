import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import wine_png from '../../assets/PNG/wine_png.png';
import { useCart } from '../../contexts/cart';

const CartItem = () => {
  const { addToCart, removeFromCart }: any = useCart();
  const [quantity, setQuantity] = useState(1);
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
        <Pressable onPress={addToCart}>
          <MinusIcon />
        </Pressable>
        <Text style={styles.counter}>{quantity}</Text>
        <Pressable onPress={removeFromCart}>
          <PlusIcon />
        </Pressable>
      </View>
    </View>
  );
}


export default function Cart({ navigation, route }: any) {
  const { products, addToCart, removeFromCart, clearCart }: any = useCart();
  return (
    <View style={styles.container}>
      {products && products.length > 0 ? (
      <CartItem />
      ) : (
        <Text style={styles.emptyText}>{"Nenhum Produto"}</Text>
      )}
    </View>
  );
};