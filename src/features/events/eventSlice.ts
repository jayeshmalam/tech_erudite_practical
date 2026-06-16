import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import {RootState} from '../../app/store/store';
import {getEventsApi} from './api/eventApi';
import {
  EventState,
} from './types/event.types';
import { STRINGS } from '@constants/strings';

export const fetchEvents =
  createAsyncThunk(
    'events/fetchEvents',
    async (_, thunkAPI) => {
      try {
        const state =
          thunkAPI.getState() as RootState;

        const token =
          state.auth.token;

        if (!token) {
          throw new Error(
            STRINGS.API.AUTHENTICATION_TOKEN_NOT_FOUND,
          );
        }

        const response =
          await getEventsApi(token);
        return response.data?.events ?? [];
      } catch (error: any) {
        return thunkAPI.rejectWithValue(
          error?.response?.data?.message ||
            error?.message ||
            STRINGS.API.DEFAULT_ERROR,
        );
      }
    },
  );

const initialState: EventState = {
  events: [],
  isLoading: false,
  error: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearEvents: state => {
      state.events = [];
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder

      .addCase(
        fetchEvents.pending,
        state => {
          state.isLoading = true;
          state.error = null;
        },
      )

      .addCase(
        fetchEvents.fulfilled,
        (
          state,
          action,
        ) => {
          state.isLoading = false;
          state.events =
            action.payload;
        },
      )

      .addCase(
        fetchEvents.rejected,
        (
          state,
          action,
        ) => {
          state.isLoading = false;

          state.error =
            action.payload as string;
        },
      );
  },
});

export const {
  clearEvents,
} = eventSlice.actions;

export default eventSlice.reducer;
