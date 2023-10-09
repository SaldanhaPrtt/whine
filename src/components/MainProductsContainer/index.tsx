import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, View} from 'react-native';
import ProductButton from '../ProductButton';
import styles from './styles';
import { getAllWines } from '../../services/SQLite/Wines'
import { closeDatabase, getDatabase } from '../../services/SQLite/SQLite';
import { Button } from 'react-native-paper';
import { useWine } from '../../contexts/wines';

type Props = {
  navigation: any;
  route: any;
};

export default function MainProductsContainer({ navigation, route }: Props) {
  const { wines }: any = useWine();

  return (
    // <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {wines && wines.length > 0 && (
          wines.map((wine: any) => {
            return(
              <ProductButton 
                key={wine.id}
                id={wine.id}
                name={wine.name}
                price={wine.price} 
                oldPrice={wine.oldPrice}
                year={wine.year}
                grapes={wine.grapes}
                country={wine.country}
                region={wine.region}
                description={wine.description}
                image={wine.image}
                navigation={navigation} 
              />
            )
          })
        )}
      </ScrollView>
    // </View>
  );
}