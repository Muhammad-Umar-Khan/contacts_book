import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddButton from '../common/components/AddButton';

import ContactsList from '../screens/contacts/ContactsList';
import AddContact from '../screens/addContact/AddContact';
import Logout from '../screens/logout/Logout';
import routeConstants from '../utils/constants/routeConstants';
import ContactsButton from '../common/components/ContactsButton';
import LogoutButton from '../common/components/LogoutButton';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: routeConstants.CONTACTS_LIST,
    component: ContactsList,
    icon: <ContactsButton />,
  },
  {
    name: routeConstants.ADD_CONTACT,
    component: AddContact,
    icon: <AddButton />,
  },
  {
    name: routeConstants.LOGOUT,
    component: Logout,
    icon: <LogoutButton />,
  },
];

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,
          justifyContent: 'space-between',
          backgroundColor: '#EBEBEB',
          height: 80,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      }}>
      {tabs?.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: () => tab.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
