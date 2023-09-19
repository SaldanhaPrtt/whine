import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, View} from 'react-native';
import ProductButton from '../ProductButton';
import styles from './styles';
import { getAllWines } from '../../services/SQLite/Wines'
import { closeDatabase, getDatabase } from '../../services/SQLite/SQLite';
import { Button } from 'react-native-paper';

type Props = {
  navigation: any;
  route: any;
};

export default function MainProductsContainer({ navigation, route }: Props) {
  const [wines, setWines] = useState<any>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const loadData = async () => {
    if(!loaded || refreshing) {
      const db = await getDatabase();
      const tempWines = await getAllWines(db);
      if(tempWines) {
        tempWines.concat(tempWines)
        setWines(tempWines)
      }
      await closeDatabase(db);
      setRefreshing(false);
      setLoaded(true);
    }
  }
  
  useEffect(() => {
    loadData()
  }, [refreshing]);

  useEffect(() => {
    loadData()
  }, []);

  return (
    // <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />}
      >
        <ProductButton name="Vinho 1" price={10} image={''} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton name="Vinho 2" price={10} image={''} oldPrice={20} navigation={navigation} route={route} />
        {wines && wines.length > 0 && (
          wines.map((wine: any) => {
            return(
              <ProductButton name={wine.name} price={wine.price} image={wine.image} oldPrice={wine.oldPrice ? wine.oldPrice : null} navigation={navigation} route={route} />
            )
          })
        )}
      </ScrollView>
    // </View>
  );
}