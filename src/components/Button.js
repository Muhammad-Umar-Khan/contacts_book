import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, color, onHandlePress}) => {
  return (
    <TouchableOpacity
      onPress={onHandlePress}
      style={[styles, {backgroundColor: color}]}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 24,
  height: 72,
  width: 332,
  alignSelf: 'center',
});

const textStyles = StyleSheet.create({
  color: 'white',
  fontWeight: '700',
  fontSize: 23,
});
