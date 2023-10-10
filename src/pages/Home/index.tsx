import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import CircleButton from '../../components/TypeButton';
import TypesBar from '../../components/TypesBar';
import PromoBanner from '../../components/PromoBanner';
import PickForYouBanner from '../../components/PickForYouBanner';
import ProductsContainer from '../../components/MainProductsContainer';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import ColorsBar from '../../components/ColorsBar';
import CountriesBar from '../../components/CountriesBar';
import DeliveryModal from '../../components/DeliveryModal';
import { useUser } from '../../contexts/user';
//Fazer a barra de países
//Ver esse funcionamento

export default function Home({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar navigation={navigation} route={route} />
      </View>
      <View style={styles.countriesWrapper}>
        <CountriesBar />
      </View>
      <View style={styles.colorsWrapper}>
        <ColorsBar />
      </View>
      {/* <DeliveryModal navigation={navigation} route={route} /> */}
      <ProductsContainer navigation={navigation} route={route} />
    </View>
  );
}