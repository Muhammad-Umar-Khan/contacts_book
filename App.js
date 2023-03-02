import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import BottomTabNavigation from './src/navigation/BottomTabNavigations';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';
import Details from './src/screens/contactDetails/Details';

import routeConstants from './src/utils/constants/routeConstants';

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
  {id: 3, route: routeConstants.TABS, component: BottomTabNavigation},
  {id: 4, route: routeConstants.DETAILS, component: Details},
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
