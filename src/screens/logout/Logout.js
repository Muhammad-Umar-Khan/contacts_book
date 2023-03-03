import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomButton from '../../components/CustomButton';

const Logout = () => {
  return (
    <LinearGradient
      colors={['#9EC5FF', '#ABE1FD', '#B9FFFB']}
      style={styles.container}>
      <View style={styles.container}>
        <CustomButton text="Logout" color="red" onHandlePress="" />
      </View>
    </LinearGradient>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    padding: 27,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontFamily: 'Poppins',
  },
});
