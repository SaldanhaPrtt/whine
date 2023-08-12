import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import MainLogo from '../../assets/JSXAssets/MainLogo';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <MainLogo /> */}
      </View>
      <View>
        <Text style={styles.title}>Whine</Text>
      </View>
    </View>
  );
}