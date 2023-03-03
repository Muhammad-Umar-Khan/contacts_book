import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import fonts from '../../themes/fonts';
import {colors} from '../../themes/theme';

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
    backgroundColor: colors.background,
    paddingLeft: 33,
    paddingTop: 37,
    paddingBottom: 30,
    flexDirection: 'row',
  },
  image: {
    marginRight: 15,
    width: 34,
    height: 34,
  },
  text: {
    fontFamily: fonts.primary_font,
    fontSize: 14,
    color: colors.logo_color,
  },
  head: {
    fontFamily: fonts.primary_font,
    fontSize: 14,
    fontWeight: '700',
    color: colors.logo_color,
  },
});
