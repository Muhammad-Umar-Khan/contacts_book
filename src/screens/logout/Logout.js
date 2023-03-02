import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomButton from '../../components/CustomButton';

const Logout = () => {
  return (
    <View>
      <CustomButton text="Logout" color="red" onHandlePress="" />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
