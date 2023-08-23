import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import CircleButton from '../../components/CircleButton';
import TypesBar from '../../components/TypesBar';
import PromoBanner from '../../components/PromoBanner';
import PickForYouBanner from '../../components/PickForYouBanner';
import styles from './styles';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import bg2 from '../../assets/PNG/bg2.webp';
import bg4 from '../../assets/PNG/bg4.jpg';
import bg5 from '../../assets/PNG/bg5.jpg';
import bg6 from '../../assets/PNG/bg6.jpg';

export default function Home({ navigation, route }: any) {
  return (
    <ImageBackground source={bg4} style={styles.bgImage} blurRadius={5}>
      <View style={styles.container}>
        <Header />
        <View style={styles.scrollWrapper}>
          <TypesBar />
        </View>
        <PromoBanner />
        <PickForYouBanner navigation={navigation} />
          <CircleButton
            text="+"
            color="#FFC700"
            onPress={() => navigation.navigate('RegisterWhine')}
          />
          <CircleButton
            text="P"
            color="#FFC700"
            onPress={() => navigation.navigate('Profile')}
          />
      </View>
    </ImageBackground>
  );
}