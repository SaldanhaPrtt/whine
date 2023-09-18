import React, { useState } from 'react';
import { ScrollView, View} from 'react-native';
import ProductButton from '../ProductButton';
import styles from './styles';
import { getAllWines } from '../../services/SQLite/Wines'
import { getDatabase } from '../../services/SQLite/SQLite';

type Props = {
  navigation: any;
  route: any;
};

export default function MainProductsContainer({ navigation, route }: Props) {
  const [wines, setWines] = useState<any>();
  const [loaded, setLoaded] = useState();
  const loadData = async () => {
    const db = getDatabase();
    const tempWines = getAllWines(db);
    setWines(tempWines as any)
  }
  return (
    // <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {wines && wines.length > 0 && wines.map((wine: any) => {
          <ProductButton text={wine.name} color="#FFC107" price={wine.price} navigation={navigation} route={route} />
        })}
        <ProductButton text="Vinho 1" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 2" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 3" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
        <ProductButton text="Vinho 4" color="#FFC107" price={10} oldPrice={20} navigation={navigation} route={route} />
      </ScrollView>
    // </View>
  );
}