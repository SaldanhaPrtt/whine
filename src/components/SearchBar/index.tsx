import React from 'react';
import { View, Text, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from './styles';
import SearchIcon from '../../assets/JSXAssets/SearchIcon';
import FilterSearch from '../../assets/JSXAssets/FilterSearch';

type Props = {
  navigation: any;
  route: any;
};

export default function SearchBar({ navigation, route }: Props) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Procurar"
        // onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        icon={() => <SearchIcon />}
      />
      <TouchableHighlight>
        <FilterSearch />
      </TouchableHighlight>
    </View>
  );
}