import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import LoginScreen from '@features/auth/screens/LoginScreen';
import {useAppSelector} from '@hooks/redux';
import EventScreen from '@features/events/screens/EventScreen';

const Stack =
  createNativeStackNavigator();

const RootNavigator = () => {
 const {token} = useAppSelector(
  state => state.auth,
);

return (
  <Stack.Navigator>
    {!token ? (
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    ) : (
      <Stack.Screen
        name="Events"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />
    )}
  </Stack.Navigator>
);
};

export default RootNavigator;