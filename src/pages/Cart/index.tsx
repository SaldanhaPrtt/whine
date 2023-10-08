import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import PlusIcon from '../../assets/JSXAssets/PlusIcon';
import MinusIcon from '../../assets/JSXAssets/MinusIcon';
import wine_png from '../../assets/PNG/wine_png.png';
import { useCart } from '../../contexts/cart';
import { Button } from 'react-native-paper';
import { useUser } from '../../contexts/user';

const CartItem = ({name, price} : { name: string, price: number}) => {
  const { addToCart, removeFromCart, totalPrice }: any = useCart();
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={wine_png} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
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
  const [refreshing, setRefreshing] = useState(false);
  const { cartProducts, addToCart, removeFromCart, clearCart, totalPrice }: any = useCart();
  const { user }: any = useUser();

  return (
    <View style={styles.container}>
      <ScrollView
        // refreshControl={<RefreshControl
        //   refreshing={refreshing}
        //   onRefresh={() => setRefreshing(true)} />}
        style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {cartProducts && cartProducts.length > 0 && cartProducts.map((product: any, index: number) => {
          return (
            <CartItem key={index} name={product.name} price={product.price} />
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