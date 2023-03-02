import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const logout_image = require('../../assets/images/tabBarIcons/logout.png');

const LogoutButton = () => {
  return (
    <View style={styles.container}>
      <Image source={logout_image} />
      <Text style={styles.text}>Logout</Text>
    </View>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    paddingTop: 10,
    color: '#000000',
  },
});
