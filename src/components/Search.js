import {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
const search_icon = require('../assets/images/search_icon.png');

const Search = ({setUsers}) => {
  const [search, setSearch] = useState('');

  async function loadFiltredUsers(search) {
    // let {data} = await getData(search);
    // setUsers(data);
  }

  const handleChange = entredText => {
    setSearch(entredText);
  };

  function debounced(debounceFunc, timeout) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        debounceFunc.apply(this, args);
      }, timeout);
    };
  }

  const debounce = useCallback(debounced(loadFiltredUsers, 300), []);

  useEffect(() => {
    debounce(search);
  }, [search]);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contact"
        onChangeText={text => handleChange(text)}
        value={search}
      />
      <Image source={search_icon} style={styles.searchIcon} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 51,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 15,
  },
  searchIcon: {
    width: 33,
    height: 28,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: '#A7A7A7',
  },
});
