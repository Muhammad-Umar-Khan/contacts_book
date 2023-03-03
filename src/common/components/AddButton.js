import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {scale} from 'react-native-size-matters';

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
    width: scale(60),
    height: scale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(50),
  },
});
