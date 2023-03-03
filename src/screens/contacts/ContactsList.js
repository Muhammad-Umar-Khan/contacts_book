import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Logo from '../../common/components/Logo';
import Search from '../../components/Search';

import {allContacts} from '../../api/fakeApiUser';
import routeConstants from '../../utils/constants/routeConstants';

const ContactsList = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(routeConstants.DETAILS);
  };

  const renderContact = ({item}) => (
    <ContactItem contact={item} handlePress={handlePress} />
  );
  return (
    <>
      <Logo />
      <View style={styles.mainView}>
        <Search />
        <FlatList
          data={allContacts}
          renderItem={renderContact}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

const ContactItem = ({contact, handlePress}) => (
  <TouchableOpacity style={styles.userContainer} onPress={handlePress}>
    <Image
      style={styles.profileImage}
      source={require('../../assets/images/dummy_image.png')}
    />
    <View style={styles.userDataContainer}>
      <Text style={styles.userName}>{contact.name}</Text>
      <Text style={styles.userEmail}>{contact.email}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
    </View>
    <Image
      style={styles.right_arrow}
      source={require('../../assets/images/right_arrow.png')}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: '#D2E4FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 324,
    height: 123,
    borderRadius: 15,
    marginTop: 30,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    paddingVertical: 16,
  },
  profileImage: {
    width: 66,
    height: 66,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
  },
  userDataContainer: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  userName: {
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 24,
    fontWeight: 700,
  },
  userEmail: {
    color: '#000000',
    fontSize: 16,
  },
  phone: {
    color: '#000000',
    fontSize: 16,
  },
  right_arrow: {
    width: 40,
    height: 40,
  },
  tabBarIcon: {
    fontSize: 24,
    width: 24,
    height: 24,
  },
  mainView: {
    paddingHorizontal: 33,
    backgroundColor: '#FFFFFF',
  },
});

export default ContactsList;
