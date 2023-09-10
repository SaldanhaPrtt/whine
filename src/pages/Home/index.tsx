import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import CircleButton from '../../components/TypeButton';
import TypesBar from '../../components/TypesBar';
import PromoBanner from '../../components/PromoBanner';
import PickForYouBanner from '../../components/PickForYouBanner';
import ProductsContainer from '../../components/MainProductsContainer';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import { createWinesTable, getWines } from '../../services/SQLite/Wines';
import { getDatabase } from '../../services/SQLite/SQLite';

export default function Home({ navigation, route }: any) {
  const [databaseCreated, setDatabaseCreated] = React.useState(false);
  React.useEffect(() => {
    if (!databaseCreated) {
      async function createTable() {
        const db = await getDatabase();
        console.log('Creating table');
        createWinesTable(db);
        setDatabaseCreated(true);
      }
      createTable();
    }
  }, []);

  const getAllWines = async () => {
    const db = await getDatabase();
    const wines = await getWines(db);
    console.log('wines', wines);
  }
  
  return (
    <View style={styles.container}>
      <SearchBar navigation={navigation} route={route} />
      <View style={styles.scrollWrapper}>
        <TypesBar />
      </View>
      {/* <PromoBanner />
      <PickForYouBanner navigation={navigation} /> */}
      <ProductsContainer navigation={navigation} route={route} />
      {/* <View style={styles.footerWrapper}>
        <FooterNavigator navigation={navigation} route={route} />
      </View> */}
    </View>
  );
}