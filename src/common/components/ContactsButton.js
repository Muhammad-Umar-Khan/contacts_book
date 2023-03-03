import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../themes/theme';
const contacts_image = require('../../assets/images/tabBarIcons/contact.png');

const ContactsButton = () => {
  return (
    <View style={styles.container}>
      <Image source={contacts_image} style={styles.image} />
      <Text style={styles.text}>Contacts</Text>
    </View>
  );
};

export default ContactsButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: scale(16),
    height: scale(17),
  },
  text: {
    fontWeight: '700',
    fontSize: scale(16),
    paddingTop: scale(10),
    color: colors.text_primary,
  },
});
