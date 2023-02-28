import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Logo from '../../components/Logo';

const allContacts = [
  {
    id: 1,
    name: 'Umar',
    email: 'umar@gmail.com',
    DOB: '12/04/1980',
    phone: '+92-31765908',
  },
  {
    id: 2,
    name: 'Jake',
    email: 'jake@gmail.com',
    DOB: '11/09/1960',
    phone: '+98-31865456',
  },
  {
    id: 3,
    name: 'Bob',
    email: 'bob@gmail.com',
    DOB: '03/09/1890',
    phone: '+92-434659654',
  },
  {
    id: 4,
    name: 'Meghan',
    email: 'meghan@gmail.com',
    DOB: '06/04/2010',
    phone: '+99-3143590987',
  },
];

const ContactItem = ({contact}) => (
  <View style={styles.userContainer}>
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
  </View>
);

const ContactsList = () => {
  const renderContact = ({item}) => <ContactItem contact={item} />;
  return (
    <>
      <View style={{paddingHorizontal: 33}}>
        <Logo />
        <FlatList
          data={allContacts}
          renderItem={renderContact}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

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
    color: '#000000',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 21,
  },
  userEmail: {
    color: '#000000',
    fontSize: 16,
    fontSize: 16,
    marginBottom: 21,
  },
  phone: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 21,
  },
  right_arrow: {
    width: 40,
    height: 40,
  },
});

export default ContactsList;
