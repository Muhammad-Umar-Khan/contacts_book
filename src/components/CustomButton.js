import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({text, color, onHandlePress}) => {
  return (
    <TouchableOpacity
      onPress={onHandlePress}
      style={[styles.button , {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    height: 72,
    width: 332,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 23,
  },
});
