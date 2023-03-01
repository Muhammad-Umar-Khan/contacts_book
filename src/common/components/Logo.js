import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const bookImage = require('../../assets/images/book.png');

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={bookImage} style={styles.image} />
      <View>
        <Text style={styles.head}>Contacts</Text>
        <Text style={styles.text}>Book</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    marginTop: 37,
    marginBottom: 30,
    flexDirection: 'row',
  },
  image: {
    marginRight: 15,
    width: 34,
    height: 34,
  },
  text: {
    fontSize: 14,
    color: '#5398FF',
  },
  head: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5398FF',
  },
});
