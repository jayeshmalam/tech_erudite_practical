import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useAppSelector} from '@hooks/redux';

import LoginScreen from '@features/auth/screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
};

const Stack =
  createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const {token} = useAppSelector(
    state => state.auth,
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <Stack.Screen
          name="MainTabs"
          component={BottomTabNavigator}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;