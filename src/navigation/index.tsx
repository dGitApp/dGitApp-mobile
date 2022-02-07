import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import { ColorSchemeName, Platform, StyleSheet}  from 'react-native';

import { RootStackParamList} from '../../types';
import AddChatScreen from '../screens/AddChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WalletProfileScreen from '../screens/WalletProfileScreen';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { readonly colorScheme: ColorSchemeName }): JSX.Element {
  
  //CUSTOM THEMES
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
      primary: 'rgb(255, 45, 85)',
    },
  };

  const MyThemeDark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: 'black',
      primary: 'rgb(255, 45, 85)',
    },
  };

  //STATES
  const [darkApp, setDarkApp] = React.useState(false);

  //SET THE THEME
  const appTheme = darkApp ? MyThemeDark : MyTheme
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      // linking={LinkingConfiguration}
      theme={appTheme}>
      <Stack.Navigator screenOptions={globalStyles}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, headerTitle: '' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="WalletProfile" component={WalletProfileScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const globalStyles = StyleSheet.create({
  headerStyle: {
    height: Platform.OS === 'ios' ? 100 : 90,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    backgroundColor: '#6e9989',
    elevation: 10,
  },
  cardStyle: {backgroundColor: 'white'},
})
