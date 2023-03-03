import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import {colors} from '../themes/theme';
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
        style={[styles.searchInput]}
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
    backgroundColor: colors.background,
    paddingHorizontal: scale(10),
    borderWidth: scale(2),
    borderColor: colors.text_primary,
    borderRadius: scale(15),
    width: scale(350),
    height: scale(40),
  },
  searchIcon: {
    width: scale(33),
    height: scale(28),
  },
  searchInput: {
    flex: 1,
    fontSize: scale(16),
    fontWeight: '400',
    color: colors.mutedText,
  },
});
