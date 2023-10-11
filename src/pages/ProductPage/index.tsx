import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Animated } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import { useWine } from '../../contexts/wines';
import { ActivityIndicator, Button, IconButton } from 'react-native-paper';

export default function ProductPage({ navigation, route }: { navigation: any, route: any }) {
  const { addToCart, removeFromCart, wines }: any = useWine();
  const [localQuantity, setLocalQuantity] = useState<number>(0);

  const [wine, setWine] = useState<any>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if(!loaded) {
    const wine = wines.find((wine: any) => wine.id === route.params.id);
    if(wine && wine.quantity){
      setLocalQuantity(wine.quantity)
    }
    setWine(wine);
    setLoaded(true);
    }
  }, [])

  const handleIncrease = () => {
    setLocalQuantity(localQuantity + 1)
    addToCart(wine)
  }

  const handleDecrease = () => {
    if(localQuantity !== 0) {
      setLocalQuantity(localQuantity - 1)
      removeFromCart(wine)
    }
  }

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
              <IconButton 
                style={styles.button}
                mode="contained"
                onPress={() => handleDecrease()}
                icon={MinusIcon}
                containerColor='color: "rgba(76, 0, 0, 0.9)"'
                size={16}
              />
              <Text style={styles.quantity}>{localQuantity}</Text>
              <IconButton 
                style={styles.button}
                mode="contained"
                onPress={() => handleIncrease()}
                icon={PlusIcon}
                containerColor='color: "rgba(76, 0, 0, 0.9)"'
                size={16}
              />
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