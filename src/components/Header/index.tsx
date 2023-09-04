import React from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import MainLogo from '../../assets/JSXAssets/MainLogo';
import ProfileIcon from '../../assets/JSXAssets/ProfileIcon';
import OptionsIcon from '../../assets/JSXAssets/OptionsIcon';
import BagIcon from '../../assets/JSXAssets/BagIcon';
import styles from './styles';

export default function Header({navigation, route}: {navigation: any, route: any}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <OptionsIcon />
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}></Text>
      </View>
      <Pressable onPress={() => navigation.navigate('Cart')}>
        <BagIcon />
      </Pressable>
    </View>
  );
}