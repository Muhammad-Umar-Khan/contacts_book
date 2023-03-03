import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
const user_image = require('../../assets/images/detals_user_image.png');

const Details = ({navigation}) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          {/* <Image source={user_image} style={styles.backIcon} /> */}
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
    width: 163,
    height: 163,
    borderRadius: 80,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 8,
  },
  phone: {
    color: '#FFFFFF',
    fontWeight: '300',
    fontSize: 16,
  },
  lowerSection: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    paddingTop: 16,
    paddingLeft: 16,
    fontWeight: '300',
  },
  dobContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 16,
    fontWeight: '300',
  },
  value: {
    flex: 2,
    color: '#000000',
    fontSize: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 12,
  },
  btns: {
    marginTop: 120,
  },
});

export default Details;
