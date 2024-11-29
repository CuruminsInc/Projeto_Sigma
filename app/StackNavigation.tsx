import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './login';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Sign_Up from './sign_up';
import Home from './home';
import User from './user';
import Car from './car';
const Stack = createStackNavigator();

export type StackNavigation = { 

  Home: undefined;
  Login: undefined;
  User: { type: string };
  Sign_Up: undefined;
  Car: { type: string };
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
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="User" component={User} />
      <Stack.Screen options={{ headerShown: false }} name="Car" component={Car} />
    </Stack.Navigator>
  
  );
}

export default StackNavigation;