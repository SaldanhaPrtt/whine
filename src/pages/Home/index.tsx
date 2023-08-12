import React from 'react';
import { View, Text } from 'react-native';
import CircleButton from '../../components/CircleButton';
import TypesBar from '../../components/TypesBar';
import PromoBanner from '../../components/PromoBanner';
import styles from './styles';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.scrollWrapper}>
        <TypesBar />
        <PromoBanner />
      </View>
    </View>
  );
}