import { View, Text } from 'react-native';
import React from 'react';
import LoginScreen from './views/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthorizationParamList } from '../types';
import SignUpScreen from './views/SignUpScreen';

const Stack = createNativeStackNavigator<AuthorizationParamList>();

export default function Authorization() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Register" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
