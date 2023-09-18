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

export default function Home({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <SearchBar navigation={navigation} route={route} />
      <View style={styles.scrollWrapper}>
        <TypesBar />
      </View>
      <View style={styles.scrollWrapper}>
        <ColorsBar />
      </View>
      {/* <PromoBanner />
      <PickForYouBanner navigation={navigation} /> */}
      <ProductsContainer navigation={navigation} route={route} />
      {/* <View style={styles.footerWrapper}>
        <FooterNavigator navigation={navigation} route={route} />
      </View> */}
    </View>
  );
}