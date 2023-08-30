import React from 'react';
import { ScrollView, View} from 'react-native';
import SquareButton from '../ProductButton';
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
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Cadastrar Produto" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <SquareButton text="Listar Produtos" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
      </ScrollView>
    // </View>
  );
}