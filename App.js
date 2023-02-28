import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens(true);
import React from 'react';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ContactsList from './src/screens/contacts/ContactsList';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactsList"
          component={ContactsList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
