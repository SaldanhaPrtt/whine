import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CircleButton from '../CircleButton';

import styles from './styles';

interface Props {
  label: string;
  onPress: () => void;
}

export default function TypesBar() {
  return (
    <ScrollView 
      style={styles.container} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      overScrollMode='never'
    >
      <CircleButton text="Merlot" />
      <CircleButton text="Cabernet Sauvignon" />
      <CircleButton text="Pinot Noir" />
      <CircleButton text="Syrah" />
      <CircleButton text="Zinfandel" />
      <CircleButton text="Sangiovese" />
      <CircleButton text="Malbec" />
      <CircleButton text="Barbera" />
      <CircleButton text="Nebbiolo" />
      <CircleButton text="Tempranillo" />
      <CircleButton text="Grenache" />
      <CircleButton text="Pinotage" />
      <CircleButton text="Carmenere" />
      <CircleButton text="Petite Sirah" />
      <CircleButton text="Mourvedre" />
      <CircleButton text="Touriga Nacional" />
      <CircleButton text="Barolo" />
      <CircleButton text="Barbaresco" />
      <CircleButton text="Chianti" />
      <CircleButton text="Brunello di Montalcino" />
      <CircleButton text="Rioja" />
      <CircleButton text="Chateauneuf-du-Pape" />
      <CircleButton text="Cotes du Rhone" />
      <CircleButton text="Bordeaux" />
      <CircleButton text="Beaujolais" />
      <CircleButton text="Burgundy" />
      <CircleButton text="Champagne" />
      <CircleButton text="Port" />
      <CircleButton text="Madeira" />
      <CircleButton text="Sherry" />
      <CircleButton text="Marsala" />
      <CircleButton text="Sauternes" />
      <CircleButton text="Ice Wine" />
      <CircleButton text="Riesling" />
      <CircleButton text="Sauvignon Blanc" />
      <CircleButton text="Chardonnay" />
      <CircleButton text="Pinot Gris" />
      <CircleButton text="Gewurztraminer" />
      <CircleButton text="Viognier" />
      <CircleButton text="Semillon" />
      <CircleButton text="Moscato" />
      <CircleButton text="Chenin Blanc" />
    </ScrollView>
  );
}