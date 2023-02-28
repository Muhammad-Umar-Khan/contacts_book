import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/book.png')} />
      <View>
        <Text>Contacts</Text>
        <Text>Book</Text>
      </View>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
