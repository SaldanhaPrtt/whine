import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import { useWine } from '../../contexts/wines';
import { ActivityIndicator } from 'react-native-paper';

export default function ProductPage({ navigation, route }: { navigation: any, route: any }) {
  const { addToCart, removeFromCart, wines }: any = useWine();

  const [wine, setWine] = useState<any>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if(!loaded) {
    const wine = wines.find((wine: any) => wine.id === route.params.id);
    setWine(wine);
    setLoaded(true);
    }
  }, [])

  return (
    <>
     {wine ? (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image borderRadius={18} resizeMode='contain' source={{ uri: wine.image }} style={styles.image} />
        </View>
        <Animated.View style={styles.lowerContainer}>
          <View style={styles.lowerContainerHeader}>
            <View style={styles.labelView}>
              <Text style={styles.price}>R$ {wine.price}</Text>
              <Text style={styles.label}>{wine.name}</Text>
            </View>
            <View style={styles.addMinusView}>
              <Pressable onPress={() => removeFromCart(wine)}>
                <MinusIcon />
              </Pressable>
              <Text style={styles.quantity}>{wine.quantity}</Text>
              <Pressable onPress={() => addToCart(wine)}>
                <PlusIcon />
              </Pressable>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Detalhes</Text>
            <Text style={styles.descriptionText}>
              {wine.description}
            </Text>
            <View style={styles.detailsContaienr}>
              <Text style={styles.descriptionText}>
                {wine.year}
              </Text>
              <Text style={styles.descriptionText}>
                {wine.country}
              </Text>
              <Text style={styles.descriptionText}>
                {wine.region}
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
      ) : (
        <View style={styles.container}>
          {/* <ActivityIndicator animating={true} color={'rgb(76,0,0)'} /> */}
        </View>
      )}
    </>
  );
}