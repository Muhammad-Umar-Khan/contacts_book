import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import fonts from '../../themes/fonts';
import {colors} from '../../themes/theme';
import route from '../../utils/constants/routeConstants';
const bookImage = require('../../assets/images/book.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(route.LOGIN);
    }, 5000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#9EC5FF', '#ABE1FD', '#B9FFFB']}
      style={styles.container}>
      <View style={styles.container}>
        <Image source={bookImage} style={styles.image} />
        <View style={styles.textStyle}>
          <Text style={styles.contactsStyles}>Contacts</Text>
          <Text style={styles.bookStyles}>Book</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    fontFamily: fonts.primary_font,
    padding: 27,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contactsStyles: {
    fontFamily: fonts.primary_font,
    color: colors.text_primary,
    fontSize: 34,
    fontWeight: 700,
  },
  bookStyles: {
    color: colors.text_primary,
    fontSize: 24,
    fontWeight: 400,
  },
  textStyle: {
    paddingLeft: 27,
  },
  image: {
    width: 75,
    height: 75,
  },
});
