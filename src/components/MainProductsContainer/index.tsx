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
  const { wines, setRefreshing, refreshing }: any = useWine();

  return (
    // <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />}
        overScrollMode='never'
      >
        {wines && wines.length > 0 && (
          wines.map((wine: any) => {
            return(
              <ProductButton 
                key={wine.id}
                navigation={navigation} 
                route={route}
                wine={wine}
              />
            )
          })
        )}
      </ScrollView>
    // </View>
  );
}