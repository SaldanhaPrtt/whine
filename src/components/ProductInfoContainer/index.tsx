import React, { useState } from 'react';
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
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.lowerContainerHeader}>
          <View style={styles.labelView}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.addMinusView}>
            <Pressable onPress={addToCart}>
              <MinusIcon />
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={removeFromCart}>
              <PlusIcon />
            </Pressable>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Detalhes</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Et malesuada fames ac turpis egestas maecenas pharetra convallis.
            Nibh cras pulvinar mattis nunc sed blandit.
          </Text>
        </View>
      </View>
    </View>
  );
};