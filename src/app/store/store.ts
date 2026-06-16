import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  configureStore,
} from '@reduxjs/toolkit';
import authReducer from '@features/auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import eventReducer from '@features/events/eventSlice';
import {PersistConfig} from 'redux-persist';
import {AuthState} from '@features/auth/types/auth.types';

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    events: eventReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor =
  persistStore(store);

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch =
  typeof store.dispatch;