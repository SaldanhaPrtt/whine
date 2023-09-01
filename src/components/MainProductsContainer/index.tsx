import React from 'react';
import { ScrollView, View} from 'react-native';
import ProductButton from '../ProductButton';
import styles from './styles';

type Props = {
  navigation: any;
  route: any;
};

export default function MainProductsContainer({ navigation, route }: Props) {
  return (
    // <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <ProductButton text="Vinho 1" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 2" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 3" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 4" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 5" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 6" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 7" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
      </ScrollView>
    // </View>
  );
}