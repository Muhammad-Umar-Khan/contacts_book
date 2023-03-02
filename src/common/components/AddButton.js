import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const add_image = require('../../assets/images/tabBarIcons/addIcon.png');

const AddButton = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={add_image} />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#98CEFF',
    width: 73,
    height: 73,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
