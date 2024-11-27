import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Sign_Up from './sign_up';
const Stack = createStackNavigator();

type StackNavigation = { 

  Home: undefined;
  Login: undefined;
  Settings: undefined;
  Sign_Up: undefined;
  Selection: undefined;
  Play: undefined;
  Change_user: undefined;
  Change_password: undefined;
  Add_word: undefined;
  Change_word: undefined;
  

};

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export function StackNavigation() {
  return (
  
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Sign_Up" component={Sign_Up} />
    </Stack.Navigator>
  
  );
}

export default StackNavigation;