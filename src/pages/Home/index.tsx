import React from 'react';
import { View, Text, Pressable } from 'react-native';
import CircleButton from '../../components/CircleButton';
import TypesBar from '../../components/TypesBar';
import PromoBanner from '../../components/PromoBanner';
import PickForYouBanner from '../../components/PickForYouBanner';
import styles from './styles';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Home({ navigation, route }: any) {
  return (
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
  );
}