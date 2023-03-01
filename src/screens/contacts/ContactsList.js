import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logo from '../../common/components/Logo';
import {allContacts} from '../../api/fakeApiUser';
import Search from '../../components/Search';
import AddContact from '../addContact/AddContact';
import Logout from '../logout/Logout';
import route from '../../utils/constants/routeConstants';
const screenOptions = {headerShown: false};

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={route.CONTACTS_LIST}
        component={ContactsList}
        options={screenOptions}
      />
      <Tab.Screen
        name={route.ADD_CONTACT}
        component={AddContact}
        options={screenOptions}
      />
      <Tab.Screen
        name={route.LOGOUT}
        component={Logout}
        options={screenOptions}
      />
    </Tab.Navigator>
  );
}

const ContactsList = () => {
  const renderContact = ({item}) => <ContactItem contact={item} />;
  return (
    <>
      <View style={{paddingHorizontal: 33}}>
        <Logo />
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
  },
  userEmail: {
    color: '#000000',
    fontSize: 16,
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
});

export default ContactsList;
