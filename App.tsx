import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  Provider,
} from 'react-redux';

import {
  PersistGate,
} from 'redux-persist/integration/react';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import RootNavigator from './src/app/navigation/RootNavigator';

import {
  persistor,
  store,
} from './src/app/store/store';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={
          persistor
        }>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
          <Toast />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;