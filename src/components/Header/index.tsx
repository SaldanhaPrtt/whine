import React from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import MainLogo from '../../assets/JSXAssets/MainLogo';
import ProfileIcon from '../../assets/JSXAssets/ProfileIcon';

import styles from './styles';

export default function Header({navigation, route}: {navigation: any, route: any}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <ProfileIcon />
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}>Home</Text>
      </View>
      <MainLogo />
    </View>
  );
}