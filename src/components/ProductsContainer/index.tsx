import React from 'react';
import { View} from 'react-native';
import SquareButton from '../SquareButton';
import styles from './styles';

export default function ProductsContainer() {
  return (
    <View style={styles.container}>
      <SquareButton text="Cadastrar Produto" color="#FFC107" />
      <SquareButton text="Listar Produtos" color="#FFC107" />
      <SquareButton text="Cadastrar Produto" color="#FFC107" />
      <SquareButton text="Listar Produtos" color="#FFC107" />
      <SquareButton text="Cadastrar Produto" color="#FFC107" />
      <SquareButton text="Listar Produtos" color="#FFC107" />
    </View>
  );
}