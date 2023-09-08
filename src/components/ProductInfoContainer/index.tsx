import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import { useCart } from '../../contexts/cart';

interface Props {
  label: string;
  price: string;
  oldPrice: string;
  image: any;
}

export default function ProductInfoContainer({ label, price, oldPrice, image }: Props) {
  const { addToCart, removeFromCart }: any = useCart();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.plusIconView}>
        <Pressable onPress={addToCart}>
          <MinusIcon />
        </Pressable>
        <Pressable onPress={removeFromCart}>
          <PlusIcon />
        </Pressable>
        </View>
        <View style={styles.lowerView}>
          <View style={styles.pricesView}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.oldPrice}>{oldPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};