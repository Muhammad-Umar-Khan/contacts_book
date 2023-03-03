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

import {allContacts} from '../../api/fakeApiUser';
import routeConstants from '../../utils/constants/routeConstants';
import typography from '../../themes/typpography';
import {colors} from '../../themes/theme';
import {scale} from 'react-native-size-matters';

const ListAllContacts = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(routeConstants.DETAILS);
  };

  const renderContact = ({item}) => (
    <ContactItem contact={item} handlePress={handlePress} />
  );
  return (
    <>
      <View style={styles.mainView}>
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
      <Text style={typography.h3}>{contact.name}</Text>
      <Text style={typography.body}>{contact.email}</Text>
      <Text style={typography.body}>{contact.phone}</Text>
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
    width: scale(280),
    height: scale(123),
    borderRadius: scale(15),
    marginTop: 30,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    paddingVertical: scale(16),
  },
  profileImage: {
    width: scale(66),
    height: scale(66),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(32),
  },
  userDataContainer: {
    marginLeft: 16,
    justifyContent: 'center',
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
    backgroundColor: colors.background,
  },
});

export default ListAllContacts;
