import React, { useState } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import { useCart } from '../../contexts/cart';

export default function ProductPage({ navigation, route }: { navigation: any, route: any }) {
  const { addToCart, removeFromCart }: any = useCart();
  const [quantity, setQuantity] = useState(0);
  console.log(route.params)
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={{uri:route.params.image}} style={styles.image} />
      </View>
      <Animated.View style={styles.lowerContainer}>
        <View style={styles.lowerContainerHeader}>
          <View style={styles.labelView}>
            <Text style={styles.price}>{route.params.price}</Text>
            <Text style={styles.label}>{route.params.name}</Text>
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
          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>
            {route.params.description}
          </Text>
          <Text style={styles.descriptionText}>
            {route.params.year}
          </Text>
          <Text style={styles.descriptionText}>
            {route.params.country}
          </Text>
          <Text style={styles.descriptionText}>
            {route.params.region}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}