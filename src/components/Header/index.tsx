import React from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import MainLogo from '../../assets/JSXAssets/MainLogo';
import ProfileIcon from '../../assets/JSXAssets/ProfileIcon';
import OptionsIcon from '../../assets/JSXAssets/OptionsIcon';
import BagIcon from '../../assets/JSXAssets/BagIcon';
import ArrowToLeft from '../../assets/JSXAssets/ArrowToLeft';
import styles from './styles';

type HeaderProps = {
  navigation: any;
  route: any;
};

export default function Header({navigation, route}: {navigation: any, route: any}) {
  const handleLeftButton = () => {
    if (route.name === 'Home') {
      navigation.navigate('Profile');
    } else {
      navigation.goBack();
    } 
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable onPress={handleLeftButton} style={styles.pressable}>
        {route.name === 'Home' ? <OptionsIcon /> : <ArrowToLeft />}
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}></Text>
      </View>
      <Pressable onPress={() => navigation.navigate('Cart')} style={styles.pressable}>
        <BagIcon />
      </Pressable>
    </View>
  );
}