import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import ProductInfoContainer from '../../components/ProductInfoContainer';
import wine_png from '../../assets/PNG/wine_png.png';

export default function ProductPage({ navigation, route }: { navigation: any, route: any }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} route={route} />
      <Text>Product Page</Text>
      <ProductInfoContainer label="Product Label" price="R$ 10,00" oldPrice="R$ 20,00" image={wine_png} />
    </View>
  );
}