import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, View} from 'react-native';
import ProductButton from '../ProductButton';
import styles from './styles';
import { getAllWines } from '../../services/SQLite/Wines'
import { closeDatabase, getDatabase } from '../../services/SQLite/SQLite';

type Props = {
  navigation: any;
  route: any;
};

export default function MainProductsContainer({ navigation, route }: Props) {
  const [wines, setWines] = useState<any>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  // const loadData = async () => {
  //   console.log(loaded, refreshing)
  //   if(!loaded || refreshing) {
  //     console.log('entrou no if')
  //     const db = getDatabase();
  //     const tempWines = getAllWines(db);
  //     console.log('tempWines', tempWines)
  //     if(tempWines) {
  //       setWines(tempWines as any)
  //     }
  //     await closeDatabase(db as any);
  //     setRefreshing(false);
  //     setLoaded(true);
  //   }
  // }
  
  // useEffect(() => {
  //   console.log('useEffect')
  //   loadData()
  // }, [refreshing]);

  // useEffect(() => {
  //   loadData()
  // }, []);

  return (
    // <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />}
      >
        {wines && wines.length > 0 && wines.map((wine: any) => {
          <ProductButton name={wine.name} price={wine.price} oldPrice={wine.oldPrice ? wine.oldPrice : null} navigation={navigation} route={route} />
        })}
        <ProductButton name="Vinho 1" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton name="Vinho 2" price={10} oldPrice={20} navigation={navigation} route={route} />
      </ScrollView>
    // </View>
  );
}