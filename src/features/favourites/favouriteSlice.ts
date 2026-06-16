import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {Event} from '../events/types/event.types';
import {FavouriteState} from './types/favourite.types';

const initialState: FavouriteState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,

  reducers: {
    toggleFavourite: (
      state,
      action: PayloadAction<Event>,
    ) => {
      const exists =
        state.favourites.some(
          item =>
            item.event_date_id ===
            action.payload.event_date_id,
        );

      if (exists) {
        state.favourites =
          state.favourites.filter(
            item =>
              item.event_date_id !==
              action.payload.event_date_id,
          );
      } else {
        state.favourites.push(
          action.payload,
        );
      }
    },

    clearFavourites: state => {
      state.favourites = [];
    },
  },
});

export const {
  toggleFavourite,
  clearFavourites,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;