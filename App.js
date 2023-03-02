import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';

import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';
import routeConstants from './src/utils/constants/routeConstants';
import {MyTabs} from './src/screens/contacts/ContactsList';

const screenOptions = {headerShown: false};

enableScreens(true);
const Stack = createStackNavigator();

const screens = [
  {
    id: 1,
    route: routeConstants.SPLASH_SCREEN,
    component: Splash,
  },
  {id: 2, route: routeConstants.LOGIN, component: Login},
  {id: 3, route: routeConstants.TABS, component: MyTabs},
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(screen => (
          <Stack.Screen
            key={screen.id}
            name={screen.route}
            component={screen.component}
            options={screenOptions}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
