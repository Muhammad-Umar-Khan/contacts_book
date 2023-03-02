import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import route from '../../utils/constants/routeConstants';
const bookImage = require('../../assets/images/book.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(route.LOGIN);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles}>
      <View>
        <Image source={bookImage} style={imageStyles} />
      </View>
      <View style={textStyle}>
        <Text style={contactsStyles}>Contacts</Text>
        <Text style={bookStyles}>Book</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  padding: 27,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F5F5F5',
  flexDirection: 'row',
  fontFamily: 'Poppins',
});

const contactsStyles = StyleSheet.create({
  fontSize: 34,
  fontWeight: 700,
});

const bookStyles = StyleSheet.create({
  fontSize: 24,
  fontWeight: 400,
});

const imageStyles = StyleSheet.create({
  width: 75,
  height: 75,
});

const textStyle = StyleSheet.create({
  paddingLeft: 27,
});
