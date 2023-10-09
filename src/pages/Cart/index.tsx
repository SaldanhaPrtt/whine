import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import wine_png from '../../assets/PNG/wine_png.png';
import { Button } from 'react-native-paper';
import { useUser } from '../../contexts/user';
import { useWine } from '../../contexts/wines';

const CartItem = ({product} : any) => {
  const { addToCart, removeFromCart }: any = useWine();
  const [localQuantity, setLocalQuantity] = useState<number>(0);

  useEffect(() => {
    setLocalQuantity(product.quantity)
  }, [])

  const handleIncrease = () => {
    setLocalQuantity(localQuantity + 1)
    addToCart(product)
  }

  const handleDecrease = () => {
    setLocalQuantity(localQuantity - 1)
    removeFromCart(product)
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={wine_png} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <View style={styles.counterContainer}>
        <Pressable onPress={() => handleDecrease()}>
          <MinusIcon />
        </Pressable>
        <Text style={styles.counter}>{localQuantity}</Text>
        <Pressable onPress={() => handleIncrease()}>
          <PlusIcon />
        </Pressable>
      </View>
    </View>
  );
}


export default function Cart({ navigation, route }: any) {
  const { cartProducts, clearCart, totalPrice }: any = useWine();
  const { user }: any = useUser();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {cartProducts && cartProducts.length > 0 && cartProducts.map((product: any, index: number) => {
          return (
            <CartItem key={product.id} product={product} />
          )
        })}
        {cartProducts.length === 0 && (
          <Text style={styles.emptyText}>{"Nenhum Produto Adicionado"}</Text>
        )}
          <Button buttonColor='rgba(76, 0, 0, 0.85)' mode='contained' onPress={clearCart}>Limpar Carrinho</Button>
      </ScrollView>
      <View style={styles.infosContainer}>
        <Text style={styles.totalText}>Valor Total: {totalPrice}</Text>
        <Button buttonColor='rgba(76, 0, 0, 0.85)' mode='contained'>Finalizar Compra</Button>
      </View>
    </View>
  );
};