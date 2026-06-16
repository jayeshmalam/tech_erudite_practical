import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';

import authReducer from '@features/auth/authSlice';
import eventReducer from '@features/events/eventSlice';
import favouriteReducer from '@features/favourites/favouriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';

import {AuthState} from '@features/auth/types/auth.types';
import {FavouriteState} from '@features/favourites/types/favourite.types';

const authPersistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage: AsyncStorage,
};

const favouritePersistConfig: PersistConfig<FavouriteState> = {
  key: 'favourites',
  storage: AsyncStorage,
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer,
);

const persistedFavouriteReducer = persistReducer(
  favouritePersistConfig,
  favouriteReducer,
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    events: eventReducer,
    favourites: persistedFavouriteReducer,
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

export const persistor = persistStore(store);

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch =
  typeof store.dispatch;