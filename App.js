// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/theme/theme'

import LoginScreen from './src/screens/LoginScreen'
import MainMenuScreen from './src/screens/MainMenuScreen'
import StoresScreen from './src/screens/StoresScreen'
import StoreScreen from './src/screens/StoreScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Mainmenu" component={MainMenuScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Stores" component={StoresScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Store" component={StoreScreen} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;