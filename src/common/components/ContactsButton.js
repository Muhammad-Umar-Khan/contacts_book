import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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
    width: 16,
    height: 17,
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    paddingTop: 10,
    color: '#000000',
  },
});
