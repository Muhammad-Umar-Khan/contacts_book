import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../themes/theme';

const CustomButton = ({text, color, onHandlePress}) => {
  return (
    <TouchableOpacity
      onPress={onHandlePress}
      style={[styles.button, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginTop: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(24),
    height: scale(72),
    width: scale(332),
    alignSelf: 'center',
  },
  text: {
    color: colors.background,
    fontWeight: '700',
    fontSize: scale(23),
  },
});
