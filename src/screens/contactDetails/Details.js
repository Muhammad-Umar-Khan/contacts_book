import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import fonts from '../../themes/fonts';
import {colors} from '../../themes/theme';
const back_image = require('../../assets/images/back_icon.png');
const user_image = require('../../assets/images/detals_user_image.png');

const Details = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image source={back_image} style={styles.backIcon} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.upperSection}>
        <Image source={user_image} style={styles.profileImage} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.phone}>+1234876</Text>
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.emailContainer}>
          <Text style={styles.value}>john@gmail.com</Text>
        </View>
        <View style={styles.dobContainer}>
          <Text style={styles.value}>09/15/1990</Text>
        </View>
        <View style={styles.btns}>
          <CustomButton text="Edit" color="#5398FF" onHandlePress={() => {}} />
          <CustomButton
            text="Delete"
            color="#FF8F8F"
            onHandlePress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5398FF',
  },
  upperSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: scale(150),
    height: scale(150),
    borderRadius: scale(80),
    marginBottom: scale(16),
    backgroundColor: colors.background,
  },
  userName: {
    color: colors.background,
    fontSize: scale(36),
    fontWeight: '700',
    marginBottom: scale(8),
  },
  phone: {
    color: colors.background,
    fontWeight: '300',
    fontSize: 16,
  },
  lowerSection: {
    flex: 1,
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    backgroundColor: colors.background,
    paddingHorizontal: scale(16),
    paddingTop: scale(16),
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    paddingTop: scale(16),
    paddingLeft: scale(16),
    fontWeight: '300',
  },
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(16),
    paddingTop: scale(16),
    fontWeight: '300',
  },
  value: {
    fontFamily: fonts.primary_font,
    flex: scale(2),
    color: colors.text_primary,
    fontSize: scale(16),
  },
  backIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: colors.background,
  },
  backText: {
    color: colors.background,
    fontSize: scale(18),
    marginLeft: scale(12),
  },
  btns: {
    marginTop: scale(70),
  },
  backButton: {
    paddingLeft: scale(10),
    paddingTop: scale(20),
    flexDirection: 'row',
  },
});

export default Details;
