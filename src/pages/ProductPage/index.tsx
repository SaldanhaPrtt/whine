import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import { useCart } from '../../contexts/cart';

export default function ProductPage({ navigation, route }: { navigation: any, route: any }) {
  const { addToCart, removeFromCart }: any = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image borderRadius={18} resizeMode='contain' source={{ uri: route.params.image }} style={styles.image} />
      </View>
      <Animated.View style={styles.lowerContainer}>
        <View style={styles.lowerContainerHeader}>
          <View style={styles.labelView}>
            <Text style={styles.price}>R$ {route.params.price}</Text>
            <Text style={styles.label}>{route.params.name}</Text>
          </View>
          <View style={styles.addMinusView}>
            <Pressable onPress={removeFromCart(route.params)}>
              <MinusIcon />
            </Pressable>
            <Text style={styles.quantity}>{route.params.quantity}</Text>
            <Pressable onPress={addToCart(route.params)}>
              <PlusIcon />
            </Pressable>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Detalhes</Text>
          <Text style={styles.descriptionText}>
            {route.params.description}
          </Text>
          <View style={styles.detailsContaienr}>
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
        </View>
      </Animated.View>
    </View>
  );
}