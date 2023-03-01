import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';
import route from './src/utils/constants/routeConstants';
import {MyTabs} from './src/screens/contacts/ContactsList';

const screenOptions = {headerShown: false};

enableScreens(true);
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={route.SPLASH_SCREEN}
          component={Splash}
          options={screenOptions}
        />
        <Stack.Screen
          name={route.LOGIN}
          component={Login}
          options={screenOptions}
        />
        <Stack.Screen
          name={route.TABS}
          component={MyTabs}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
