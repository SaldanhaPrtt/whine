import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import CircleButton from '../../components/TypeButton';
import TypesBar from '../../components/TypesBar';
import PromoBanner from '../../components/PromoBanner';
import PickForYouBanner from '../../components/PickForYouBanner';
import ProductsContainer from '../../components/MainProductsContainer';
import styles from './styles';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import bg2 from '../../assets/PNG/bg2.webp';
import bg4 from '../../assets/PNG/bg4.jpg';
import bg5 from '../../assets/PNG/bg5.jpg';
import bg6 from '../../assets/PNG/bg6.jpg';
import { LinearGradient } from 'react-native-svg';
import SearchBar from '../../components/SearchBar';
import FooterNavigator from '../../components/FooterNavigator';

export default function Home({ navigation, route }: any) {
  return (
    // <ImageBackground source={bg4} style={styles.bgImage} blurRadius={1}>
      <View style={styles.container}>
        <Header navigation={navigation} route={route} />
        <SearchBar navigation={navigation} route={route} />
        <View style={styles.scrollWrapper}>
          <TypesBar />
        </View>
        {/* <PromoBanner />
        <PickForYouBanner navigation={navigation} /> */}
        <ProductsContainer navigation={navigation} route={route} />
        <FooterNavigator navigation={navigation} route={route} />
      </View>
    // </ImageBackground>
  );
}